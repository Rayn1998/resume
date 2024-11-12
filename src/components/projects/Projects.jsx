import Project from "./project/Projects";

// 1. cg-source
// 2. sportska akademija

const projects = [
    {
        name: "CG-source",
        description: "Project to help studios and artists find each other, where company may publish the vacancies and artists can place their resumes.",
        github_links: [
            "https://github.com/Rayn1998/cg-source"
        ],
        demo_link: "https://rayn1998.github.io/cg-source/"
    },
    {
        name: "Project “Sportska Akademija”",
        description:
            "- Project made for gym services. Allows customers to take a look at the gym and make a decision to visit it or not. - Project has a contact form to contact the trainer - The stack of technologies used: React, CSS, JS, Git.",
        github_links: ["https://github.com/Rayn1998/sportska_academija"],
        demo_link: "https://rayn1998.github.io/sportska_academija/",
    },
    {
        name: "“E-commers shop”",
        description:
            "- Personal project with e-commerse functions. Has search and filtering, ordering the goods, admin pannel, registration, authorization, etc. - The stack of technologies used: React, Typescript, SASS, Express, NodeJS, MongoDB, JS, Git.",
        github_links: [
            "https://github.com/Rayn1998/ecommersFront",
            "https://github.com/Rayn1998/ecommersApi",
        ],
    },
    {
        name: "Project “Squid-Game”",
        description:
            "- Little personal project, made to allow watching series of tv-show with admin pannel which allows to add and remove series - The stack of technologies used: React, Redux, SASS, JS, Git.",
        github_links: [
            "https://github.com/Rayn1998/squid-game",
        ],
        demo_link: "https://rayn1998.github.io/squid-game/",
    },
    {
        name: "Project “Movies explorer”",
        description:
            "-Yandex project with for searching and saving to favourites the movies. There is search and filtering, authentication, etc. - The stack of technologies used: React, Redux Toolkit, SASS, Express, NodeJS, MongoDB, JS, Git.",
        github_links: [
            "https://github.com/Rayn1998/movies-explorer-frontend",
            "https://github.com/Rayn1998/movies-explorer-api",
        ],
    },
    {
        name: "Test for Mitrasoft",
        description: "Test task for Mitrasoft company with need to immitate the work with database for user's comments",
        github_links: ["https://github.com/Rayn1998/mitrasoft-test/tree/master"],
        demo_link: "https://rayn1998.github.io/mitrasoft-test/",
    }
];

const Projects = () => {
    return (
        <div className="projects ">
            <h2 className="blue" style={{ paddingTop: "1rem" }}>
                Projects
            </h2>
            {projects.map((project, i) => {
                return (
                    <Project
                        name={project.name}
                        description={project.description}
                        github_links={project.github_links}
                        demo_link={project.demo_link}
                        key={i}
                    />
                );
            })}
        </div>
    );
};

export default Projects;
