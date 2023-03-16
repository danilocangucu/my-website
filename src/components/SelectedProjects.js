const Header = () => {
    const text = "Selected Projects".toUpperCase()
    return (
    <h1>
        {text}
    </h1>
    )
}

const Projects = () => (
    <>
    <div className="projects">
        <Project
        name="Pacman"
        description="Duo project for desktop."
        tech="JavaScript, HTML and CSS"
        role="part of JavaScript logics, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman-js/tree/master"
        link="https://tranquil-tarsier-fe7b59.netlify.app/"/>
        <Project
        name="My website"
        description="The website you are now!"
        tech="React.js, HTML and CSS"
        role="building the project from scratch."
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/my-website"
        link="https://tranquil-tarsier-fe7b59.netlify.app/"/>
    </div>
    {/* <div className="projects">
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"
        link="https://tranquil-tarsier-fe7b59.netlify.app/"/>
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"
        link="https://tranquil-tarsier-fe7b59.netlify.app/"/>
    </div> */}
    </>
)

const Project = ({ name, description, tech, role, video, github, link }) => {
    return (
        <div className="project">
            <div className="project-video-container">
                <video
                className='project-video'
                src={video}
                autoPlay muted loop playsInline type="video/mp4"/>
            </div>
            <div className="project-text">
                <h2>{name}</h2>
                {description}
                <br/>Made with {tech}.
                I was responsible for {role}.
                <br/><br/>
                    <a href={github}>
                    <img
                    src="https://github.com/danilocangucu/my-website/raw/main/src/components/github-mark-white.png"
                    height="13" alt="GitHub logo"></img> Repository</a> <a href={link}>View</a>  
            </div>
        </div>
    )
}

const SelectedProjects = () => {
    return (
        <div className="selected-projects-body">
            <Header />
            <Projects />
        </div>
    )
}

export default SelectedProjects