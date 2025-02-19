interface ButtonProps {
    onClick?: () => void,
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
    className?: string,
}

export default function Button({ onClick, children, type, disabled, className }: ButtonProps) {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`base-button ${className}`}
            >
                {children}
            </button>
        </>
    )
}
