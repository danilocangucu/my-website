export const formatLinkText = (text: string) => {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-');
};

export const extractLinksFromText = (text: string | React.ReactNode) => {
    if (typeof text !== 'string') {
        return text;
    }

    // Split the text by <CustomLink> tags
    const parts = text.split(/(<CustomLink text=["'].*?["'] url=["'].*?["'] \/>)/);

    return parts.map((part, index) => {
        // Check if the part matches the <CustomLink> pattern
        const match = part.match(/<CustomLink text=["'](.*?)["'] url=["'](.*?)["'] \/>/);
        if (match) {
            const [, linkText, linkUrl] = match;

            return {
                type: 'link',
                linkText,
                linkUrl,
                key: index,
            };
        }

        // If no match, return it as plain text
        return {
            type: 'text',
            content: part,
            key: index,
        };
    });
};

