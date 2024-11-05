import React from "react"

const Header: React.FC = () => {
  const text = "Selected Projects".toUpperCase()
  return (
    <h1 className="home-h1">
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
          height={350}
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
        Made with {techStack} & more.
        <br />
        <br />
        <a href={`${gitHubUrl}${projectName}`} target="_blank" rel="noreferrer">
          <img src={gitHubIconUrl} height="13" alt="GitHub logo"></img>{" "}
          Repository
        </a>{" "}
        {link && <a href={link}>View</a>}
      </div>
    </div>
  );
};

// TODO backend should provide this data and the video files
const projectsData = [
  {
    name: "Golden Rack",
    description: "Fullstack project!",
    techStack: "Node.js, Express.js, TypeScript, React, Redux, Tailwind CSS, MongoDB, AWS EC2",
    projectName: "goldenrack",
    link: "https://danilocangucu.net/status?subdomain=goldenrack.danilocangucu.net",
  },
  {
    name: "Love Tokens",
    description: "Fullstack project!",
    techStack: "Node.js, Express.js, TypeScript, React, Redux, Tailwind CSS, MongoDB, AWS EC2",
    projectName: "lovetokens",
    link: "https://danilocangucu.net/status?subdomain=lovetokens.danilocangucu.net",
  },
  {
    name: "Bike app",
    description: "Fullstack project!",
    techStack: "Go, JavaScript, SQLite, AWS EC2, Docker, Cypress, unit tests",
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
    // TODO update my-website video
    name: "My website",
    description: "Where you are now!",
    techStack: "React, TypeScript, GitHub Actions, AWS EC2, Lambda",
    projectName: "my-website",
    link: "",
  },
];

const Projects: React.FC = () => (
  // TODO marquee for technologies?
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