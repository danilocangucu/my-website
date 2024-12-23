import React from 'react';
import classNames from 'classnames';

import { extractLinksFromText } from '../utils/ParagraphUtils';
import CustomLink from '../components-shared/CustomLink';

interface ParagraphProps {
    children: React.ReactNode;
    additionalClassNames?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ children, additionalClassNames = [] }) => {
    const processedContent = extractLinksFromText(children as string) as { type: string; linkText: string; linkUrl: string; key: number; content?: undefined; }[] | { type: string; content: string; key: number; linkText?: undefined; linkUrl?: undefined; }[];

    return (
        <p className={classNames('quattrocento-regular', ...additionalClassNames)}>
            {Array.isArray(processedContent) && processedContent.map((part) => {
                if (part.type === 'link') {
                    return (
                        <CustomLink key={part.key} url={part.linkUrl!}>
                            {part.linkText}
                        </CustomLink>
                    );
                }
                return part.content;
            })}
        </p>
    );
};

export default Paragraph;
