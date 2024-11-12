const Project = ({ name, description, github_links, demo_link }) => {
    return (
        <article className="project">
            <h3 className="project_name">{name}</h3>
            <p>{description}</p>
            <div className="project_links">
                {github_links.map((link, i) => {
                    return (
                        <a href={link} target="_blank" key={i}>{link}</a>
                    );
                })}
                {demo_link && <p>Demo link: <a href={demo_link} target="_blank">{demo_link}</a></p>}
            </div>
        </article>
    );
}

export default Project;