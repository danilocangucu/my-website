import React from 'react';
import classNames from 'classnames';

interface ParagraphProps {
    children: React.ReactNode;
    additionalClassNames?: string[];
}

const Paragraph: React.FC<ParagraphProps> = ({ children, additionalClassNames = [] }) => {
    return (
        <p
            className={classNames('quattrocento-regular', ...additionalClassNames)}
        >
            {children as string}
        </p>
    );
};

export default Paragraph;
