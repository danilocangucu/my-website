const Skills = () => {
    let h1 = "Skills".toUpperCase()
    return (
      // TODO carousel of skills
      // TODO update skills from CV
      <div className="skills-body">
        <h1>{h1}</h1>
        <div className="skills">
          <Skill skill="HTML" />
          <Skill skill="CSS" />
          <Skill skill="Go" />
          <Skill skill="React" />
          <Skill skill="JavaScript" />
          <Skill skill="Java" />
          <Skill skill="Git" />
          <Skill skill="SQL" />
          <Skill skill="GraphQL" />
          <Skill skill="Docker" />
          <Skill skill="AWS" />
        </div>
        <span>&nbsp;</span>
      </div>
    );
}

const Skill = ({ skill }) => {
    let wasTriggered = false
        document.addEventListener("scroll", () => {
            const skillElement = document.getElementById(`${skill}`);
            const elementPosition = skillElement.getBoundingClientRect();
            if (Math.round(window.innerHeight - elementPosition["bottom"]) > 20 && !wasTriggered){
                skillElement.classList.add(`${skill}`,`${skill}-animation`)
                wasTriggered = true
            }
        });
    return (
        <ul>
            <li>
                <span id={skill}></span>
                <em>{skill}</em>
            </li>
        </ul>
    )
}

export default Skills