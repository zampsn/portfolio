import {useEffect, useRef} from "react";

const BG_COLOR = "rgb(14,20,32)";
const PARTICLE_COLOR = "rgba(229,231,235,0.8)"; // text-gray-200
const COLOR_PALETTE = [
    "rgba(245,158,11,0.9)",     // amber-500
    "rgba(52,211,153,0.9)",     // emerald-400
    "rgba(129,140,248,0.9)",    // indigo-400
    "rgba(251,113,133,0.9)"     // rose-400
];
const DENSITY = 0.40;
const CONNECTION_DISTANCE = 150;
const FADE_SPEED = 0.05;
const HOVER_RADIUS = 60;
const PARTICLE_SPEED_MULTIPLIER = 0.5;

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

const GeometricCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Array<Particle>>([]);
    const mousePos = useRef({x: -1000, y: -1000});
    const hoveredParticle = useRef<Particle | null>(null);
    const connectionOpacity = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            const num_particles: number = Math.floor(
                (canvas.width * canvas.height) *
                (DENSITY / 10_000)
            );

            particles.current = Array.from({length: num_particles}, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER,
                speedY: (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER,
                color: COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]
            }));
        };

        const findHoveredParticle = () => {
            let closest = null;
            let minDistance = Infinity;

            particles.current.forEach(p => {
                const dx = p.x - mousePos.current.x;
                const dy = p.y - mousePos.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < HOVER_RADIUS && distance < minDistance) {
                    minDistance = distance;
                    closest = p;
                }
            });

            return closest;
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = BG_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p === hoveredParticle.current ? p.color : PARTICLE_COLOR;
                ctx.fill();
            });
        };

        const drawConnections = () => {
            const currentHover = findHoveredParticle();
            if (currentHover) {
                hoveredParticle.current = currentHover;
                connectionOpacity.current = Math.min(connectionOpacity.current + FADE_SPEED, 1);
            } else {
                connectionOpacity.current = Math.max(connectionOpacity.current - FADE_SPEED, 0);
            }

            if (connectionOpacity.current > 0.01 && hoveredParticle.current) {
                ctx.lineWidth = 0.5;

                particles.current.forEach(p => {
                    if (p === hoveredParticle.current || !hoveredParticle.current) return;
                    const dx = p.x - hoveredParticle.current.x;
                    const dy = p.y - hoveredParticle.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        // Create gradient between particles
                        const gradient = ctx.createLinearGradient(
                            hoveredParticle.current.x,
                            hoveredParticle.current.y,
                            p.x,
                            p.y
                        );
                        gradient.addColorStop(0, hoveredParticle.current.color);
                        gradient.addColorStop(1, p === hoveredParticle.current ? p.color : PARTICLE_COLOR);

                        ctx.strokeStyle = gradient;
                        ctx.beginPath();
                        ctx.moveTo(hoveredParticle.current.x, hoveredParticle.current.y);
                        ctx.lineTo(p.x, p.y);
                        ctx.stroke();
                    }
                });
            }
        };

        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            const rect = canvas.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        let animationFrame: number;
        const animate = () => {
            drawParticles();
            drawConnections();
            animationFrame = requestAnimationFrame(animate);
        };

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        canvas.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return <canvas ref={canvasRef}
                   className="fixed top-0 left-0 w-full h-full pointer-events-auto bg-black"/>;
};

export default GeometricCanvas;