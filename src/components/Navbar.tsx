import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-scroll";
import {FaHome, FaUser, FaBriefcase} from "react-icons/fa";

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
                className="fixed top-4 left-1/2 -translate-x-1/2 z-20 flex space-x-4 bg-gray-900/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-700/50 shadow-lg"
            >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-green-400 transition cursor-pointer"
                >
                    <FaHome/>
                    <span className="hidden md:inline">Home</span>
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-green-400 transition cursor-pointer"
                >
                    <FaUser/>
                    <span className="hidden md:inline">About</span>
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-gray-200 hover:text-green-400 transition cursor-pointer"
                >
                    <FaBriefcase/>
                    <span className="hidden md:inline">Experience</span>
                </Link>
            </motion.nav>
        </>
    );
};

export default Navbar;
