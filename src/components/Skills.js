const Skills = () => {
    let h1 = "Skills".toUpperCase()
    return (
        <div className="skills-body">
            <h1>{h1}</h1>
            <div className="skills">
                <Skill skill="HTML"/>
                <Skill skill="CSS"/>
                <Skill skill="JavaScript"/>
                <Skill skill="React"/>
                <Skill skill="Go"/>
                <Skill skill="SQL"/>
                <Skill skill="WordPress"/>
                <Skill skill="Liquid"/>
            </div>
            <span>&nbsp;</span>
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