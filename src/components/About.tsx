import {motion} from "framer-motion";

const SKILLS = ['Kubernetes', 'Cloud Infrastructure', 'CI/CD Systems', 'Cybersecurity', 'Developer Experience']

const AboutSection = () => {
    return (
        <section className="relative py-16 md:py-24 bg-transparent backdrop-blur-sm overflow-hidden" id="about">
            <div className="container mx-auto px-6 sm:px-8 lg:px-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-blue-400"
                >
                    Security-Oriented Developer
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="p-6 sm:p-8 bg-transparent rounded-xl border border-gray-800/50 shadow-lg transition-all">
                        <div className="space-y-6">
              <span className="text-gray-300/90 text-lg sm:text-xl font-bold leading-relaxed font-mono">
                Hi, I'm Zach!
              </span>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                I've always had a deep curiosity about how things work. From taking apart gadgets in my
                                childhood to exploring robotics and RC vehicles, my passion naturally led me to
                                programming.
                                <br/><br/>
                                As a self-taught developer with over three years of professional development experience,
                                I specialize in platform engineering—building secure, scalable infrastructure that
                                balances speed with security. My focus is on creating maintainable, resilient systems
                                that empower developers without compromising safety.
                            </p>

                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{delay: 0.2}}
                                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800/50"
                            >
                                <h3 className="text-sky-400 font-mono mb-3 sm:mb-4 text-base sm:text-lg">Core
                                    Competencies</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {SKILLS.map((skill, i) => (
                                        <motion.div
                                            key={skill}
                                            initial={{opacity: 0, scale: 0.9}}
                                            whileInView={{opacity: 1, scale: 1}}
                                            transition={{delay: i * 0.05}}
                                            className="px-3 py-1 text-xs sm:text-sm font-mono bg-transparent text-gray-300 rounded-full border border-gray-700/60"
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


export default AboutSection