export interface Skill {
  name: string;
  logoFile: string;
  skillUrl: string;
  category: string;
  useLightGlow: boolean;
}

// TODO correct the path to the images in the server
export const logosBaseUrl = `https://danilocangucu.net/certificates/`;

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
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};