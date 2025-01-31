import Hero from "../components/Hero.tsx";
// import ExperienceTimeline from "../components/ExperienceTimeline.tsx";
// import Placeholder from "../components/Placeholder.tsx"
import GeometricCanvas from "../components/GeometricCanvas.tsx";

function App() {
    return (<>
            <GeometricCanvas>
                <Hero/>
                {/*<ExperienceTimeline/>*/}
                {/*<Placeholder/>*/}
            </GeometricCanvas>
        </>
    )
}

export default App
