import videopacman from './pacman.mp4'
import githublogo from './github-mark-white.png'

const Header = () => {
    const text = "Selected Projects".toUpperCase()
    return (
    <h1>
        {text}
    </h1>
    )
}

const Projects = () => (
    <div className="projects">
        <Project
        name="Pacman"
        tech="JavaScript, HTML and CSS"
        role="JavaScript logics and DOM manipulation, CSS and HTML"
        video={videopacman}
        github=""/>
    </div>
)

const Project = ({ name, tech, role, video, github }) => {
    return (
        <div>
            <video
            className='project-video'
            src={video}
            autoPlay muted loop playsInline type="video/mp4"/>
            <h2>{name}</h2>
            Duo project for desktop.
            <br/>Made with {tech}.
            <br/>I was responsible for {role}.
            <br/><img src={githublogo} height="13"></img> Repo
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