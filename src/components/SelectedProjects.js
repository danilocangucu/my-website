// import videopacman from './pacman.mp4'
// import githublogo from './github-mark-white.png'

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
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"/>
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"/>
    </div>
    <div className="projects">
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"/>
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video="https://github.com/danilocangucu/my-website/blob/main/src/components/pacman.mp4?raw=true"
        github="https://github.com/danilocangucu/pacman"/>
    </div>
    </>
)

const Project = ({ name, tech, role, video, github }) => {
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
                Duo project for desktop.
                <br/>Made with {tech}.
                I was responsible for {role}.
                <br/><br/>
                    <a href={github}>
                    <img
                    src="https://github.com/danilocangucu/my-website/raw/main/src/components/github-mark-white.png"
                    height="13" alt="GitHub logo"></img> Repository</a> <a href="http://">View</a>  
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