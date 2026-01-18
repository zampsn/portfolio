import {motion} from "framer-motion";
import {Code2, Lock, Terminal} from "lucide-react";

const SKILLS = ['Cybersecurity', 'Developer Experience', 'CI/CD Automation', 'System Design'];

const AboutSection = () => {
    return (
        <section className="relative py-16 md:py-24 bg-transparent backdrop-blur-sm overflow-hidden" id="about">
            <div className="container mx-auto px-6 sm:px-8 lg:px-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-5 md:mb-6 text-gray-400"
                >
                    Security-Oriented Developer
                </motion.h2>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6}}
                    className="flex justify-center space-x-4 mb-5 md:mb-6"
                >
                    <div className="p-3">
                        <Terminal className="w-6 h-6 text-amber-500"/>
                    </div>

                    <div className="p-3">
                        <Code2 className="w-6 h-6 text-emerald-400"/>
                    </div>

                    <div className="p-3">
                        <Lock className="w-6 h-6 text-indigo-400"/>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="p-6 sm:p-8 rounded-xl border border-gray-800/50 shadow-lg transition-all">
                        <div className="space-y-6">
                            <span className="text-gray-300/90 text-lg sm:text-xl font-bold leading-relaxed font-mono">
                                Hi, I'm Zach!
                            </span>
                            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                                I’ve always been driven by curiosity about how things work. From taking apart gadgets as
                                a kid to experimenting with robotics and RC vehicles, that curiosity naturally evolved
                                into a passion for programming.
                                <br/><br/>
                                I’m a self-taught developer with over three years of professional experience,
                                specializing in platform engineering. I design and build secure, scalable infrastructure
                                that balances developer velocity with strong security guarantees. My work focuses on
                                creating maintainable, resilient systems that empower teams to ship confidently without
                                compromising safety.
                            </p>

                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-emerald-500 shadow-lg transition-all"
                            >
                                <h3 className="text-gray-200 font-mono mb-3 sm:mb-4 text-base sm:text-lg">Core
                                    Competencies</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {SKILLS.map((skill, i) => (
                                        <motion.div
                                            key={skill}
                                            initial={{opacity: 0, scale: 0.9}}
                                            whileInView={{opacity: 1, scale: 1}}
                                            transition={{delay: i * 0.05}}
                                            className="px-3 py-1 text-xs sm:text-sm font-mono text-gray-400 border border-gray-700/60 rounded-full"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
