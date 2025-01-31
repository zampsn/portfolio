// components/ExperienceTimeline.tsx
import {motion} from "framer-motion";
import {Cloud, Server, Cpu} from "lucide-react";

const experiences = [
    {
        title: "Platform Engineer",
        company: "CloudScale Technologies",
        date: "2024 - Present",
        location: "Halifax, NS",
        description: [
            "Architected Kubernetes-based deployment system handling 10k+ pods",
            "Implemented distributed tracing system across microservices",
            "Designed CI/CD pipeline reducing deployment time by 40%"
        ],
        icon: <Cloud className="w-6 h-6"/>,
        tech: ["K8s", "AWS", "Terraform", "Prometheus"]
    },
    {
        title: "Backend Software Developer",
        company: "DataStream Inc",
        date: "2020 - 2022",
        location: "Halifax, NS",
        description: [
            "Developed real-time data processing pipeline handling 1M+ events/sec",
            "Optimized PostgreSQL queries reducing latency by 65%",
            "Implemented Kafka-based event streaming system"
        ],
        icon: <Server className="w-6 h-6"/>,
        tech: ["Go", "PostgreSQL"]
    },
    {
        title: "DevOps Engineer",
        company: "TechFoundry",
        date: "2018 - 2020",
        location: "Austin, TX",
        description: [
            "Migrated legacy systems to cloud infrastructure (AWS/GCP)",
            "Created monitoring dashboard aggregating 50+ services metrics",
            "Automated deployment processes using Ansible and Jenkins"
        ],
        icon: <Cpu className="w-6 h-6"/>,
        tech: ["AWS", "Ansible", "Docker", "Grafana"]
    }
];

const ExperienceTimeline = () => {
    return (
        <section className="relative py-20 bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative max-w-5xl mx-auto">
                    <div
                        className="absolute left-1/2 w-1 bg-gradient-to-b from-cyan-500/30 to-transparent h-full -translate-x-1/2"/>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: index % 2 === 0 ? 50 : -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-between w-full`}
                        >
                            <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                <div
                                    className="inline-block p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                                    <p className="text-cyan-400 font-mono text-sm mb-1">{exp.date}</p>
                                    <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                                    <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                                </div>
                            </div>

                            <div className="w-2/12 flex justify-center">
                                <div className="p-4 bg-gray-900 border-2 border-cyan-400/30 rounded-full relative z-10">
                                    {exp.icon}
                                </div>
                            </div>

                            <div className="w-5/12">
                                <div
                                    className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl">
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm">{item}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-0 left-1/4 w-0.5 h-20 bg-gradient-to-b from-cyan-500/30 to-transparent animate-pulse"/>
                <div
                    className="absolute top-1/3 right-1/4 w-0.5 h-32 bg-gradient-to-b from-cyan-500/20 to-transparent animate-pulse delay-300"/>
                <div
                    className="absolute bottom-0 left-1/3 w-0.5 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent animate-pulse delay-500"/>
            </div>
        </section>
    );
};

export default ExperienceTimeline;