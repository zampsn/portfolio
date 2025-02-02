import Hero from "../components/Hero.tsx";
import ExperienceTimeline from "../components/ExperienceTimeline.tsx";
import Placeholder from "../components/Placeholder.tsx"
import GeometricCanvas from "../components/GeometricCanvas.tsx";
import AboutSection from "../components/About.tsx";
import Navbar from "../components/Navbar.tsx";
import CanvasOverlay from "../components/CanvasOverlay.tsx";
import HomeButton from "../components/HomeButton.tsx";

function App() {
    return (<>
            <GeometricCanvas/>
            <Navbar/>
            <CanvasOverlay><Hero/></CanvasOverlay>
            <AboutSection/>
            <Placeholder/>
            <ExperienceTimeline/>
            <HomeButton/>
        </>
    )
}

export default App
