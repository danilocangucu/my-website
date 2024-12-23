import React from 'react';
import classNames from 'classnames';

import { extractLinksFromText } from '../utils/ParagraphUtils';
import CustomLink from '../components-shared/CustomLink';

interface ParagraphProps {
    children: React.ReactNode;
    additionalClassNames?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ children, additionalClassNames = [] }) => {
    const processedContent = extractLinksFromText(children as string) as (
        | { type: 'link'; linkText: string; linkUrl: string; key: number; }
        | { type: 'text'; content: string; key: number; }
    )[];

    return (
        <p className={classNames('quattrocento-regular', ...additionalClassNames)}>
            {processedContent.map((part) => {
                if (part.type === 'link') {
                    return (
                        <CustomLink key={part.key} text={part.linkText} url={part.linkUrl} />
                    );
                }
                return <React.Fragment key={part.key}>{part.content}</React.Fragment>;
            })}
        </p>
    );
};

export default Paragraph;
