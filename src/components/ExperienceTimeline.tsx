import {motion} from "framer-motion";
import {Cloud, MessageCircle, Server} from "lucide-react";
import React from "react";

const experiences = [
    {
        title: "Software Developer",
        company: "ResMed",
        team: "Platform Engineering, Security",
        date: "2024 - Present",
        location: "Halifax, NS",
        description: [
            "Played a key role in a cross-functional initiative to create a centralized secret management solution using HashiCorp Vault.",
            "Contributed to the engineering of a Docker base image pipeline with automated publishing and regular security scans."
        ],
        icon: <Cloud className="w-6 h-6 text-teal-400"/>,
        skills: ["Kubernetes", "AWS", "Terraform", "Typescript"]
    },
    {
        title: "Junior Software Developer",
        company: "Byos Inc",
        team: "Cloud Backend",
        date: "2022 - 2024",
        location: "Halifax, NS",
        description: [
            "Contributed to the back-end infrastructures of IoT management systems for network security devices.",
            "Assisted in the development of back-end services related to customer and license management.",
            "Collaborated with cross-functional teams, including QA and Embedded Systems, to ensure reliability and high performance of cloud-based solutions"
        ],
        icon: <Server className="w-6 h-6 text-blue-400"/>,
        skills: ["Go", "MariaDB", "Docker", "OpenAPI"]
    },
    {
        title: "Various Customer Service Roles",
        company: "Various Companies",
        date: "2016 - 2022",
        description: [
            "Demonstrated strong communication and interpersonal skills in diverse customer service settings.",
            "Proven ability to work effectively in fast-paced environments, enhancing adaptability and time management capabilities.",
            "Consistently surpassed performance targets through exceptional service and problem-solving abilities."
        ],
        icon: <MessageCircle className="w-6 h-6 text-indigo-400"/>,
        skills: ["Problem Solving", "Customer Relations", "Conflict Resolution"]
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

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical timeline line */}
                    <div
                        className="hidden md:block absolute left-0 w-1 bg-gradient-to-b from-gray-600/30 to-transparent h-full"
                    />

                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: index * 0.15}}
                                className="group relative flex md:flex-row items-start"
                            >
                                {/* Timeline icon */}
                                <div
                                    className="absolute left-0 -translate-x-1/2 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-gray-700/50 shadow-lg text-gray-200">
                                    {React.cloneElement(exp.icon, {className: "w-5 h-5"})}
                                </div>

                                {/* Card content */}
                                <div className="relative md:ml-14 pt-14 md:pt-0 w-full">
                                    <div
                                        className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-xl hover:border-gray-700/80 transition-all">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <p className="text-green-400/80 font-mono text-xs mb-1">
                                                {exp.date}
                                            </p>
                                            <h3 className="text-lg font-semibold text-gray-100">
                                                {exp.title}
                                                <span className="text-gray-400"> · {exp.company}</span>
                                            </h3>
                                            {exp.team && (
                                                <p className="text-gray-500 text-sm mt-1">{exp.team}</p>
                                            )}
                                        </div>

                                        <ul className="space-y-3 text-gray-300 text-sm">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="relative pl-4">
                                                    <div
                                                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-green-400/30"/>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.skills && (
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {exp.skills.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2.5 py-1 text-xs font-mono bg-gray-800/30 text-gray-400 rounded-full border border-gray-700/50"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;