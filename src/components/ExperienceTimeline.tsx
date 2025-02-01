import {motion} from "framer-motion";
import {Cloud, Server, MessageCircle} from "lucide-react";

const experiences = [
    {
        title: "Software Developer",
        company: "ResMed",
        team: "Platform Engineering, Security",
        date: "2024 - Present",
        location: "Halifax, NS",
        description: [
            "Developed a centralized secrets management system, enhancing security and compliance.",
            "Engineered a Vault-based solution managing 1,000+ secrets across repositories, environments, and clusters",
            "Automated Docker base image pipeline with security scans and monitoring.",
        ],
        icon: <Cloud className="w-6 h-6 text-teal-400"/>,
        tech: ["Kubernetes", "AWS", "Terraform", "Datadog"]
    },
    {
        title: "Junior Software Developer",
        company: "Byos Inc",
        team: "Core Backend Services",
        date: "2022 - 2024",
        location: "Halifax, NS",
        description: [
            "Built backend infrastructure for IoT network security systems.",
            "Developed services for customer account and license management.",
            "Optimized system reliability and cloud deployments."
        ],
        icon: <Server className="w-6 h-6 text-blue-400"/>,
        tech: ["Go", "MariaDB", "Docker", "OpenAPI"]
    },
    {
        title: "Customer Service",
        company: "Various Companies",
        date: "2016 - 2022",
        description: [
            "Provided customer support across industries, ensuring high satisfaction.",
            "Resolved inquiries efficiently, improving response times.",
            "Enhanced problem-solving and communication skills."
        ],
        icon: <MessageCircle className="w-6 h-6 text-indigo-400"/>,
        // tech: ["Customer Relations", "Conflict Resolution"]
    }
];

const ExperienceTimeline = () => {
    return (
        <section className="relative py-12 md:py-20 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-green-400"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical line - hidden on mobile, shown on md+ */}
                    <div
                        className="hidden md:block absolute left-1/2 w-1 bg-gradient-to-b from-gray-600 to-transparent h-full -translate-x-1/2"/>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: index % 2 === 0 ? 50 : -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            className="mb-8 md:mb-12 w-full"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                                <div className="md:w-5/12 mb-4 md:mb-0 md:order-1 text-left md:text-right">
                                    <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/80 shadow-lg">
                                        <p className="text-green-400 font-mono text-sm mb-1">{exp.date}</p>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-200">{exp.title}</h3>
                                        {exp.team && <p className="text-gray-500 text-xs mt-1">{exp.team}</p>}
                                        <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                                    </div>
                                </div>

                                {/* Icon Center - Always centered */}
                                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0 order-2">
                                    <div className="p-4 bg-gray-800 border-2 border-gray-800 rounded-full relative z-10">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Right Section (Description) - Mobile first */}
                                <div className="md:w-5/12 order-3">
                                    <div className="p-6 bg-gray-800/20 rounded-lg border border-gray-800/80 shadow-lg">
                                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-sm">{item}</li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.tech?.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-mono bg-gray-700 text-gray-300 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;