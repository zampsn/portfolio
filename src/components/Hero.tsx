import {motion} from "framer-motion";
import {Github, Linkedin, Mail} from "lucide-react";
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 z-10">
                <div className="backdrop-blur-sm bg-gray-900/10 p-8 shadow-2xl min-w-full">
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.2}}
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent mb-4"
                    >
                        Zach Sampson
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4}}
                        className="text-xl md:text-2xl text-gray-300 mb-6 font-mono"
                    >
                        Software Developer
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6}}
                        className="flex justify-center space-x-4 pointer-events-auto"
                    >
                        <a href="https://github.com/zampsn" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-zinc-800 hover:bg-zinc-800/80 rounded-lg transition-all duration-300 group">
                            <Github className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors"/>
                        </a>
                        <a href="https://linkedin.com/in/zsampson" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-zinc-800 hover:bg-zinc-800/80 rounded-lg transition-all duration-300 group">
                            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors"/>
                        </a>
                        <a href="mailto:sampsonzx03@gmail.com"
                           className="p-3 bg-zinc-800 hover:bg-zinc-800/80 rounded-lg transition-all duration-300 group">
                            <Mail className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors"/>
                        </a>
                    </motion.div>
                </div>

                <p className="absolute bottom-8 text-gray-400 text-sm font-mono">
                    <TypeAnimation
                        sequence={[
                            "// Making software great again", 2000,
                            "// Securing all the things", 2000,
                            "// This is fine 🔥 (production on fire)", 2000,
                            "// Pushing to prod on a Friday", 2000,
                            "// Hunting IAM misconfigurations", 2000,
                            "// Fighting entropy one commit at a time", 2000,
                            "// Automating your job", 2000,
                            "// Testing in production (please don't tell)", 2000,
                            "// Mitigating supply chain risks", 2000,
                            "// Stealing your IP address... just kidding 😜", 2000,
                            "// Automating all the things", 2000,
                            "// Who broke the build? 🧐", 2000,
                            "// More coffee less vulnerabilities", 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        preRenderFirstString={true}
                        deletionSpeed={75}
                        repeat={Infinity}
                        cursor={true}
                        style={{display: "inline-block"}}
                    />
                </p>
            </div>
        </div>
    );
}

export default Hero;

