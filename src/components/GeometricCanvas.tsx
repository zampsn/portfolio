import {useEffect, useRef} from "react";

const BG_COLOR = "rgba(23,22,22,0.9)";
const PARTICLE_COLOR = "rgba(163,167,184,0.8)";
const DENSITY = 0.40;
const CONNECTION_DISTANCE = 150;
const FADE_SPEED = 0.05;
const HOVER_RADIUS = 60;
const PARTICLE_SPEED_MULTIPLIER = 0.5

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number
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
            console.log(`drawing ${num_particles} particles`)

            particles.current = Array.from({length: num_particles}, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER,
                speedY: (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER
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
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.fill();
            });
        };

        const drawConnections = () => {
            const currentHover = findHoveredParticle();
            // Update hover state and opacity
            if (currentHover) {
                hoveredParticle.current = currentHover;
                connectionOpacity.current = Math.min(connectionOpacity.current + FADE_SPEED, 1);
            } else {
                connectionOpacity.current = Math.max(connectionOpacity.current - FADE_SPEED, 0);
            }

            if (connectionOpacity.current > 0.01 && hoveredParticle.current) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${0.5 * connectionOpacity.current})`;
                ctx.lineWidth = 0.5;

                particles.current.forEach(p => {
                    if (p === hoveredParticle.current || !hoveredParticle.current) return;
                    const dx = p.x - hoveredParticle.current.x;
                    const dy = p.y - hoveredParticle.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
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
                   className="fixed top-0 left-0m w-full h-full pointer-events-auto bg-gradient-to-b from-gray-900 to-gray-950"/>
};

export default GeometricCanvas;