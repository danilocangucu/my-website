export interface Skill {
  name: string;
  logoFile: string;
  skillUrl: string;
  category: string;
  useLightGlow: boolean;
}

export const logosBaseUrl = `https://danilocangucu.net/my-website/assets/home/components/skills/images/`;

export const arrangeSkillsByCategory = (
  skillsData: Skill[]
): Record<string, Skill[]> => {
  return skillsData.reduce((acc: Record<string, Skill[]>, skill) => {
    const categoryKey = skill.category
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/^\w/, (c) => c.toLowerCase());

    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }

    acc[categoryKey].push(skill);

    return acc;
  }, {});
};

export const populateMarquee = (skillsLogos: Skill[], desiredCount: number) => {
  const filledLogos = [];
  let index = 0;

  while (filledLogos.length < desiredCount) {
    filledLogos.push(skillsLogos[index % skillsLogos.length]);
    index++;
  }

  return filledLogos;
};

export const glowShadow = {
  light: "0px 0px 5px rgba(255, 255, 255, 0.7)",
  dark: "0px 0px 5px rgba(0, 0, 0, 0.7)",
};

export const formatCategoryName = (category: string): string => {
  return category
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};

// TODO add missing skills
export const skillsData = [
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
    useLightGlow: false,
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
  {
    name: "React Router",
    logoFile: `react_router.png`,
    skillUrl: "https://reactrouter.com/",
    category: "frontend",
    useLightGlow: false,
  },
  {
    name: "Node.js",
    logoFile: `node.js.png`,
    skillUrl: "https://nodejs.org/",
    category: "backend",
    useLightGlow: true,
  },
  {
    name: "MongoDB",
    logoFile: `mongodb.png`,
    skillUrl: "https://mongodb.com/",
    category: "databases",
    useLightGlow: true,
  },
  {
    name: "Git",
    logoFile: `git.png`,
    skillUrl: "https://mongodb.com/",
    category: "cloud_and_dev_ops",
    useLightGlow: true,
  },
  {
    name: "Avid",
    logoFile: `avid.png`,
    skillUrl: "https://www.avid.com/",
    category: "other",
    useLightGlow: true,
  },
  {
    name: "Cypress",
    logoFile: `cypress.png`,
    skillUrl: "https://www.avid.com/",
    category: "testing",
    useLightGlow: true,
  },
  {
    name: "TypeScript",
    logoFile: `typescript.png`,
    skillUrl: "https://www.avid.com/",
    category: "frontend",
    useLightGlow: false,
  },
  // TODO check if there's a better logo
  {
    name: "Express.js",
    logoFile: `express.png`,
    skillUrl: "https://expressjs.com/",
    category: "frontend",
    useLightGlow: true,
  },
  {
    name: "PostgreSQL",
    logoFile: `postgresql.png`,
    skillUrl: "https://www.postgresql.org/",
    category: "databases",
    useLightGlow: true,
  },
  {
    name: "Docker",
    logoFile: `docker.png`,
    skillUrl: "https://www.docker.com/",
    category: "cloud_and_dev_ops",
    useLightGlow: false,
  },
  {
    name: "Trello",
    logoFile: `trello.png`,
    skillUrl: "https://trello.com/",
    category: "other",
    useLightGlow: true,
  },
  {
    name: "JUnit",
    logoFile: `junit.png`,
    skillUrl: "https://junit.org/",
    category: "testing",
    useLightGlow: false,
  },
  {
    name: "Storybook",
    logoFile: `storybook.png`,
    skillUrl: "https://storybook.js.org/",
    category: "familiar_with",
    useLightGlow: true,
  },
  {
    name: "JavaScript",
    logoFile: `javascript.png`,
    skillUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "frontend",
    useLightGlow: false,
  },
  {
    name: "MySQL",
    logoFile: `mysql.png`,
    skillUrl: "https://www.mysql.com/",
    category: "databases",
    useLightGlow: true,
  },
];
