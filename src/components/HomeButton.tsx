import {useState, useEffect} from "react";
import {Link} from "react-scroll";
import {ArrowUp} from "lucide-react";

const HomeButton = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5;
            setIsAtBottom(isBottom);
        };

        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, []);

    return (
        <Link
            to="home"
            smooth={true}
            duration={500}
            className={`fixed right-4 bottom-4 z-20 bg-gray-900/80 backdrop-blur-md py-4 px-4 rounded-[20px] border border-gray-700/50 shadow-lg text-gray-200 hover:text-green-400 transition-all cursor-pointer ${
                isAtBottom ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <ArrowUp/>
        </Link>
    );
};

export default HomeButton;