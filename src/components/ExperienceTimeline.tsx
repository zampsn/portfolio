import {motion} from "framer-motion";
import {Cloud, MessageCircle, Server} from "lucide-react";
import React from "react";

const experiences = [
    {
        title: "Software Developer",
        company: "Resmed",
        team: "Platform Engineering, Security",
        date: "2024 - Present",
        location: "Halifax, NS",
        description: [
            "Owned, designed, and maintained Gandalf, a shift-left security initiative to proactively detect and block vulnerabilities before they reach production.",
            "Played a key role in delivering a centralized secrets management platform using HashiCorp Vault, improving credential security and operational consistency across teams.",
            "Contributed to the development of a Docker hardened base image pipeline featuring automated publishing and continuous security scanning to reduce supply-chain risk."
        ],
        icon: <Cloud className="w-6 h-6 text-emerald-400"/>,
        skills: ["Typescript", "CI/CD", "HCP Vault", "Terraform", "Cybersecurity"]
    },
    {
        title: "Junior Software Developer",
        company: "Byos Inc",
        team: "Cloud Backend",
        date: "2022 - 2024",
        location: "Halifax, NS",
        description: [
            "Contributed to the design and development of back-end infrastructure supporting IoT management systems for network security devices.",
            "Built and enhanced back-end services for customer and license management, improving reliability and supporting business-critical workflows.",
            "Worked closely with QA and Embedded Systems partners to ensure the reliability, performance, and scalability of cloud-based solutions."
        ],
        icon: <Server className="w-6 h-6 text-indigo-400"/>,
        skills: ["Go", "MariaDB", "Docker", "OpenAPI"]
    },
    {
        title: "Various Customer Service Roles",
        date: "2016 - 2022",
        description: [
            "Delivered clear, professional communication across diverse customer interactions, building rapport and resolving issues efficiently.",
            "Thrived in fast-paced environments by adapting quickly to changing priorities while maintaining strong time management and focus.",
            "Consistently exceeded performance targets through high-quality service, effective problem-solving, and attention to customer needs."
        ],
        icon: <MessageCircle className="w-6 h-6 text-rose-400"/>,
        skills: ["Problem Solving", "Customer Relations", "Conflict Resolution"]
    }
];

const ExperienceTimeline = () => {
    return (
        <section className="relative py-12 md:py-20 transparnet backdrop-blur-sm overflow-hidden" id="experience">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-400"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
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
                                    className="absolute left-1/2 -translate-x-1/2 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 border-2 border-gray-700/50 shadow-lg md:left-0 md:-translate-x-1/2">
                                    {React.cloneElement(exp.icon)}
                                </div>


                                {/* Card content */}
                                <div className="relative md:ml-14 pt-14 md:pt-0 w-full">
                                    <div
                                        className="p-6 bg-transparent backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-xl transition-all">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <p className="text-blue-400 font-mono text-xs mb-1">
                                                {exp.date}
                                            </p>
                                            <h3 className="text-lg font-semibold text-gray-100">
                                                {exp.title}
                                                {exp.company && (
                                                    <span className="text-gray-400"> · {exp.company}</span>
                                                )}
                                            </h3>
                                            {exp.team && (
                                                <p className="text-gray-500 text-sm mt-1">{exp.team}</p>
                                            )}
                                        </div>

                                        <ul className="space-y-3 text-gray-300 text-sm">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="relative pl-4">
                                                    <div
                                                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-blue-400/60"/>
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