import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <>
            <button className="custom-button" {...props}>
                {children}
            </button>
            <style jsx>{`
                .custom-button {
                    padding: 10px 25px;
                    cursor: pointer;
                    font-family: var(--jakarta-bold);
                    font-weight: 600;
                    background-color: var(--primary-color);
                    border-radius: 50px;
                    border: none;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default Button;