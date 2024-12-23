import React from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface CustomLinkProps {
    children: React.ReactNode;
    url: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        gsap.to(['.hohoho-page-container', '.footer'], {
            opacity: 0,
            duration: 0.7,
            onComplete: () => {
                navigate(url, { state: { fromHohoho: true } });
            },
        });
    };

    return (
        <span
            onClick={handleClick}
            className="dd-link"
            style={{ cursor: 'pointer' }}
        >
            {children}
        </span>
    );
};

export default CustomLink;
