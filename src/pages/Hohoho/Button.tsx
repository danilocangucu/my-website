import React from 'react';

type ButtonProps = {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium';
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', size = 'medium', disabled = false }) => {
    const buttonClass = `merriweather-regular button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`;

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
