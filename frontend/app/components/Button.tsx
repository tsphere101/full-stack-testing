import React from 'react';
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

export default function Button({
    onClick,
    children,
    type,
    disabled,
    className,
}: ButtonProps) {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`base-button bg-[#6c63ff] text-white py-3 px-4 border-none rounded-lg cursor-pointer text-lg transition-colors duration-200 ease-in-out hover:bg-[#5a54e0] ${className}`}
            >
                {children}
            </button>
        </>
    );
}
