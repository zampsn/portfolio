import Hero from "../components/Hero.tsx";
import ExperienceTimeline from "../components/ExperienceTimeline.tsx";
import Placeholder from "../components/Placeholder.tsx"
import GeometricCanvas from "../components/GeometricCanvas.tsx";
import AboutSection from "../components/About.tsx";

function App() {
    return (<>
            <GeometricCanvas>
                <Hero/>
                <AboutSection/>
                <Placeholder/>
                <ExperienceTimeline/>
                <Placeholder/>
            </GeometricCanvas>
        </>
    )
}

export default App
