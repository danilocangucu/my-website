const Header = () => {
    const text = "Selected Projects".toUpperCase()
    return (
    <h1>
        {text}
    </h1>
    )
}

const Project = ({ name, description, tech, role, projectName, link }) => {
  const gitHubUrl = `https://github.com/danilocangucu/`;
  const gitHubIconUrl = `https://github.com/danilocangucu/my-website/blob/main/public/images/github-mark-white.png?raw=true`;
  const videoSrcUrl = `https://github.com/danilocangucu/my-website/blob/main/public/videos/${projectName}.mp4?raw=true`;

  return (
    <div className="project">
      <div className="project-video-container">
        <video
          className="project-video"
          src={videoSrcUrl}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        />
      </div>
      <div className="project-text">
        <h2>{name}</h2>
        {description}
        <br />
        Made with {tech}. I was responsible for {role}.
        <br />
        <br />
        <a href={`${gitHubUrl}${projectName}`}>
          <img src={gitHubIconUrl} height="13" alt="GitHub logo"></img>{" "}
          Repository
        </a>{" "}
        {link && <a href={link}>View</a>}
      </div>
    </div>
  );
};

const projectsData = [
  {
    name: "Love Tokens",
    description: "Fullstack project!",
    tech: "React, Redux (Toolkit), React Hook Form, React Router, Tailwind CSS, SASS, Node.js, Express.js, MongoDB, AWS EC2, Jest, JWT, crypto, bcrypt, toastify",
    role: "implementing all aspects of the project",
    projectName: "lovetokens",
    link: "https://lovetokens.danilocangucu.com/",
  },
  {
    name: "Bike app",
    description: "Fullstack project!",
    tech: "Go, JavaScript, SQLite, AWS, Docker, Cypress and unit tests",
    role: "implementing all aspects of the project",
    projectName: "hsk-bikeapp",
    link: "",
  },
  {
    name: "Pacman",
    description: "Duo project for desktop.",
    tech: "JavaScript, HTML and CSS",
    role: "part of JavaScript logics, CSS and HTML",
    projectName: "pacman-js",
    link: "https://tranquil-tarsier-fe7b59.netlify.app/",
  },
  {
    name: "My website",
    description: "The website you are now!",
    tech: "React.js, HTML and CSS",
    role: "building the project from scratch",
    projectName: "my-website",
    link: "",
  },
];

const Projects = () => (
  <div className="projects">
    {projectsData.map((project, index) => (
      <Project
        key={index}
        name={project.name}
        description={project.description}
        tech={project.tech}
        role={project.role}
        projectName={project.projectName}
        link={project.link}
      />
    ))}
  </div>
);

const SelectedProjects = () => {
    return (
        <div className="selected-projects-body">
            <Header />
            <Projects />
        </div>
    )
}

export default SelectedProjects