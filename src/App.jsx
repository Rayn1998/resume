import Header from "./components/header/Header";
import Socials from "./components/socials/Socials";
import AboutMe from "./components/about-me/About-me";
import Projects from "./components/projects/Projects";
import TechStack from "./components/tech-stack/TechStack";
import Additional from "./components/additional/Additional";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Socials />
                <article className="main_content">
                    <div className="left">
                        <AboutMe />
                        <Projects />
                    </div>
                    <div className="right">
                        <TechStack />
                        <div className="previous_experience" style={{color: "black", marginTop: "2rem"}}>
                            <h2 className="blue">Previous Experience</h2>
                            <p>Worked as a frelance developer</p>
                        </div>
                        <Additional />
                    </div>
                </article>
            </main>
        </div>
    );
}

export default App;
