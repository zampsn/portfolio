import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-scroll";
import {House, User, BriefcaseBusiness, Download} from "lucide-react"

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    let lastScrollY = 0;

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (<>
            <motion.nav
                initial={{opacity: 0, y: -20}}
                animate={{opacity: visible ? 1 : 0, y: visible ? 0 : -20}}
                transition={{duration: 0.3}}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-20 flex space-x-4 bg-zinc-950/10 backdrop-blur-md px-6 py-2 rounded-full border border-gray-700/50 shadow-lg"
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition cursor-pointer"
                >
                    <House/>
                    <span className="hidden md:inline">Home</span>
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition cursor-pointer"
                >
                    <User/>
                    <span className="hidden md:inline">About</span>
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition cursor-pointer"
                >
                    <BriefcaseBusiness/>
                    <span className="hidden md:inline">Experience</span>
                </Link>
                <a
                    href="/Zach_Sampson_Resume.pdf"
                    download
                    className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition cursor-pointer rounded-full border border-gray-600/60 hover:border-blue-400 px-3 py-1.5"
                >
                    <Download size={16} />
                    <span className="hidden md:inline">Resume</span>
                </a>
            </motion.nav>
        </>
    );
};

export default Navbar;
