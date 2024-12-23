import React from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface CustomLinkProps {
    text: string;
    url: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                navigate(`/hohoho${url}`, { state: { fromHohoho: true } });
            },
        });
    };

    return (
        <span
            onClick={handleClick}
            className="dd-link"
            style={{ cursor: 'pointer' }}
        >
            {text}
        </span>
    );
};

export default CustomLink;
