import React from "react";
import Marquee from "react-fast-marquee";

import {
    arrangeSkillsByCategory,
    formatCategoryName,
    glowShadow,
    logosBaseUrl,
    populateMarquee,
    Skill,
    // TODO implement the backend for skillsData and fetch them here
    skillsData
} from "../utils/SkillsUtils";

export const LogosMarquee: React.FC<{ skillsLogos: Skill[] }> = ({ skillsLogos }) => {
    const populatedMarquee = populateMarquee(skillsLogos, 20);
    return (
        <Marquee gradient={false} pauseOnHover={true} speed={50}>
            {populatedMarquee.map((skill, index) => (
                <div key={index} style={{ margin: '0 20px' }}>
                    <img
                        style={{
                            filter: `drop-shadow(${skill.useLightGlow ?
                                glowShadow.light : glowShadow.dark})`,
                            padding: "10px"
                        }}
                        src={`${logosBaseUrl}${(skill.logoFile)}`}
                        alt={skill.name}
                        height={80}
                    />
                </div>
            ))}
        </Marquee>
    );
};

const mapSkillsToCategories: React.FC = (skills: Record<string, Skill[]>): JSX.Element[] => {
    return Object.keys(skills).map((category) => {
        const formattedCategory = formatCategoryName(category);

        return (
            <div key={category}>
                <h3>{formattedCategory}</h3>
                <LogosMarquee skillsLogos={skills[category]} />
            </div>
        );
    });
};

const Skills: React.FC = () => {
    const h1 = "Skills".toUpperCase();
    const skills = arrangeSkillsByCategory(skillsData);
    const mappedSkills = mapSkillsToCategories(skills);

    return (
        // TODO option to change view from marquee to grid
        <div className="skills-body">
            <h1 className="home-h1">{h1}</h1>
            {mappedSkills}
            { /* TODO fix this <span> */}
            <span>&nbsp;</span>
        </div>
    );
}

export default Skills;

