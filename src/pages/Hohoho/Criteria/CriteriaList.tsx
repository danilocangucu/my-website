import React from 'react';

interface CriteriaItem {
    title: string;
    description: string;
}

interface CriteriaListProps {
    criteria: CriteriaItem[];
}

const CriteriaList: React.FC<CriteriaListProps> = ({ criteria }) => {
    return (
        <ul className="quattrocento-regular" style={{ margin: "0px" }}>
            {criteria.map((item, index) => (
                <li key={index}>
                    <strong>{item.title}</strong> {item.description}
                </li>
            ))}
        </ul>
    );
};

export default CriteriaList;
