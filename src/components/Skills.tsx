import React from "react";

import { arrangeSkillsByCategory, formatCategoryName, glowShadow, logosBaseUrl, populateMarquee, Skill } from "../utils/SkillsUtils";
import Marquee from "react-fast-marquee";

// TODO add missing skills
// TODO implement the backend for skills and fetch them here
const skillsData = [
    {
        name: "React",
        logoFile: `react.png`,
        skillUrl: "https://reactjs.org/",
        category: "Frontend",
        useLightGlow: false,
    },
    {
        name: "Redux",
        logoFile: `redux.png`,
        skillUrl: "https://redux.js.org/",
        category: "Frontend",
        useLightGlow: true,
    },
    {
        name: "Python",
        logoFile: `python.png`,
        skillUrl: "https://www.python.org/",
        category: "Backend",
        useLightGlow: false,
    },
    {
        name: "Java",
        logoFile: `java.png`,
        skillUrl: "https://www.oracle.com/java/",
        category: "Backend",
        useLightGlow: false,
    },
    {
        name: "Spring",
        logoFile: `spring.png`,
        skillUrl: "https://spring.io/",
        category: "Backend",
        useLightGlow: false,
    },
    {
        name: "GraphQL",
        logoFile: `graphql.png`,
        skillUrl: "https://graphql.org/",
        category: "Databases",
        useLightGlow: true,
    },
    {
        name: "AWS",
        logoFile: `aws.png`,
        skillUrl: "https://aws.amazon.com/",
        category: "cloud_and_dev_ops",
        useLightGlow: true,
    },
    {
        name: "Linux",
        logoFile: `linux.png`,
        skillUrl: "https://www.linux.org/",
        category: "Other",
        useLightGlow: true,
    },
    {
        name: "Ubuntu",
        logoFile: `ubuntu.png`,
        skillUrl: "https://www.linux.org/",
        category: "Other",
        useLightGlow: true,
    },
    {
        name: "Photoshop",
        logoFile: `photoshop.png`,
        skillUrl: "https://www.adobe.com/products/photoshop.html",
        category: "Other",
        useLightGlow: true,
    },
    {
        name: "Jest",
        logoFile: `jest.png`,
        skillUrl: "https://jestjs.io/",
        category: "Testing",
        useLightGlow: true,
    },
    {
        name: "Azure",
        logoFile: `azure.png`,
        skillUrl: "https://azure.microsoft.com/",
        category: "familiar_with",
        useLightGlow: false,
    },
    {
        name: "Google Cloud Console",
        logoFile: `google_cloud_console.png`,
        skillUrl: "https://cloud.google.com/console/",
        category: "familiar_with",
        useLightGlow: false,
    },
    {
        name: "Kotlin",
        logoFile: `kotlin.png`,
        skillUrl: "https://kotlinlang.org/",
        category: "familiar_with",
        useLightGlow: true,
    },
];

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
        <div className="skills-body">
            <h1>{h1}</h1>
            {mappedSkills}
            <span>&nbsp;</span>
        </div>
    );
}

export default Skills;

