export const getCriteriaFromTranslationData = (translations: any, namespace: string, language: string) => {
    const languageData = translations[language]?.[namespace];

    if (!languageData) return [];

    const criteriaKeys = Object.keys(languageData)
        .filter((key) => key.startsWith('criteria-li') && (key.includes('-title') || key.includes('-description')));

    const criteria = [];
    for (let i = 1; i <= Math.floor(criteriaKeys.length / 2); i++) {
        const titleKey = `criteria-li${i}-title`;
        const descriptionKey = `criteria-li${i}-description`;

        criteria.push({
            title: languageData[titleKey],
            description: languageData[descriptionKey],
        });
    }

    return criteria;
};
