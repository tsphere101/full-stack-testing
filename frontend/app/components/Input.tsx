import React from 'react';
import styles from './Input.module.css';
import { BsEyeSlash, BsEye } from "react-icons/bs";

interface InputProps {
    label: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    name: string,
    showPassword?: boolean;
    toggleShowPassword?: () => void
    isPasswordInput?: boolean
}

export default function Input({ name, label, onChange, value, type, placeholder, showPassword, toggleShowPassword, isPasswordInput }: InputProps) {
    return (
        <>
            <div className={`relative`}>
                <label htmlFor={name} className="sr-only">{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    className={`${styles['input-field']} rounded-lg h-[40px] text-black w-full px-[14px] py-[10px]`}
                />
                {isPasswordInput && (
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className={`absolute right-[16px] top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer z-10 text-black opacity-45`}
                    >
                        {showPassword ? <BsEye /> : <BsEyeSlash />}
                    </button>
                )}
            </div>
        </>
    )
}
