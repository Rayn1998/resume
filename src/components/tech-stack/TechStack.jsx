import Technologie from "./technologie/Technologie";

const technologies = [
    "React",
    "Redux-Toolkit",
    "JS",
    "HTML",
    "SASS",
    "NodeJS",
    "Figma",
];

const TechStack = () => {
    return (
        <article className="tech-stack">
            {technologies.map((technologie, i) => {
                return <Technologie name={technologie} key={i} />;
            })}
        </article>
    );
};

export default TechStack;
