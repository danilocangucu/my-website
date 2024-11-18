import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: 'secondary' | 'tertiary' | 'quaternary';
    size?: 'x-small' | 'small' | 'medium';
    disabled?: boolean;
    hasArrow?: boolean;
    arrowState?: boolean;
    inlineStyles?: React.CSSProperties;
    extraClass?: string;
    id?: string;
    type?: 'button' | 'submit';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        text,
        onClick,
        variant = 'primary',
        size = 'medium',
        disabled = false,
        hasArrow = false,
        arrowState = false,
        inlineStyles,
        id,
        type,
    },
        ref
    ) => {
        const buttonClass = classNames(
            'merriweather-regular',
            'button',
            `button--${variant}`,
            `button--${size}`,
            { 'button--disabled': disabled, }
        );

        return (
            <button
                id={`${id}-button`}
                className={buttonClass}
                onClick={onClick}
                disabled={disabled}
                style={inlineStyles}
                type={type ? type : 'button'}
                ref={ref} // Forward the ref to the <button> element
            >
                <span id={`${id}-span`}>{text}</span>
                {hasArrow && (
                    <span
                        className={`margin-left--space-2xs ${disabled ? 'button--disabled' : ''}`}
                        style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            transform: arrowState ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    >
                        &#9660;
                    </span>
                )}
            </button>
        );
    }
);

export default Button;
