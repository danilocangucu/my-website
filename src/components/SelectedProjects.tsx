import React from "react"

const Header: React.FC = () => {
  const text = "Selected Projects".toUpperCase()
  return (
    <h1>
      {text}
    </h1>
  )
}

interface ProjectProps {
  name: string;
  description: string;
  techStack: string;
  projectName: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, techStack, projectName, link }) => {
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
        />
      </div>
      <div className="project-text">
        <h2>{name}</h2>
        {description}
        <br />
        Mainly {techStack} & more.
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
    name: "Golden Rack",
    description: "Fullstack project!",
    techStack: "Node.js, Express.js, React, Redux, Tailwind CSS, MongoDB and AWS",
    projectName: "goldenrack",
    link: "https://goldenrack.danilocangucu.net/",
  },
  {
    name: "Love Tokens",
    description: "Fullstack project!",
    techStack: "Node.js, Express.js, React, Redux, Tailwind CSS, MongoDB and AWS EC2",
    projectName: "lovetokens",
    link: "https://lovetokens.danilocangucu.net/",
  },
  {
    name: "Bike app",
    description: "Fullstack project!",
    techStack: "Go, JavaScript, SQLite, AWS EC2, Docker, Cypress and unit tests",
    projectName: "hsk-bikeapp",
    link: "",
  },
  {
    name: "Pacman",
    description: "Duo project for desktop.",
    techStack: "JavaScript, HTML and CSS",
    projectName: "pacman-js",
    link: "https://tranquil-tarsier-fe7b59.netlify.app/",
  },
  {
    name: "My website",
    description: "The website you are now!",
    techStack: "GitHub Actions, AWS EC2 and Lambda, React",
    projectName: "my-website",
    link: "",
  },
];

const Projects: React.FC = () => (
  // TODO better CSS-grid for projects
  // TODO shorter project descriptions
  // TODO carousel for technologies?
  <div className="projects">
    {projectsData.map((project, index) => (
      <Project
        key={index}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        projectName={project.projectName}
        // TODO project.link should be the project's own page
        link={project.link}
      />
    ))}
  </div>
);

const SelectedProjects: React.FC = () => {
  return (
    <div className="selected-projects-body">
      <Header />
      <Projects />
    </div>
  )
}

export default SelectedProjects