const Skills = () => {
    let h1 = "Skills".toUpperCase()
    return (
        <div className="skills-body">
            <h1>{h1}</h1>
            <div className="skills">
                <Skill skill="html"/>
                <Skill skill="css"/>
                <Skill skill="javascript"/>
                <Skill skill="go"/>
                <Skill skill="sql"/>
                <Skill skill="react"/>
                <Skill skill="liquid"/>
            </div>
            <span>a</span>
        </div>
    )
}

const Skill = ({ skill }) => {
    return (
        <ul>
            <li>
                <span className={skill}></span>
                <em>{skill}</em>
            </li>
        </ul>
    )
}

export default Skills