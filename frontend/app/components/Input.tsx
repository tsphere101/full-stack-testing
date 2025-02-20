import React from 'react';
import styles from './Input.module.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => void;
    placeholder?: string;
    name: string;
    showPassword?: boolean;
    toggleShowPassword?: () => void;
    isPasswordInput?: boolean;
    options?: { value: string; label: string }[];
}

export default function Input({
    name,
    label,
    onChange,
    value,
    type,
    placeholder,
    showPassword,
    toggleShowPassword,
    isPasswordInput,
    options,
}: InputProps) {
    return (
        <>
            <div className={`relative`}>
                <label htmlFor={name} className="sr-only">
                    {label}
                </label>
                {type === 'select' ? (
                    <>
                        <div className={`relative inline-block w-full`}>
                            <select
                                id={name}
                                name={name}
                                value={value}
                                onChange={(e) => onChange(e)}
                                className={`rounded-lg h-[40px] w-full px-[14px] py-[10px] appearance-none ${value === options?.[0].value ? `text-[#A0AFBA]` : `text-black`}`}
                            >
                                {options?.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    width="14"
                                    height="10"
                                    viewBox="0 0 14 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.94294 0.526828L0.562579 0.526828C0.442936 0.526828 0.376865 0.664329 0.450079 0.757186L6.73758 8.80719C6.79077 8.87558 6.85888 8.93093 6.93671 8.969C7.01454 9.00707 7.10004 9.02686 7.18669 9.02686C7.27333 9.02686 7.35883 9.00707 7.43666 8.969C7.5145 8.93093 7.5826 8.87558 7.63579 8.80719L13.9233 0.757185C13.9965 0.662542 13.9304 0.526827 13.8108 0.526827L12.4304 0.526827C12.3429 0.526827 12.259 0.567898 12.2054 0.635756L7.18758 7.06433L2.16794 0.635756C2.11436 0.567899 2.03044 0.526828 1.94294 0.526828Z"
                                        fill="black"
                                        fillOpacity="0.45"
                                    />
                                </svg>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <input
                            type={type}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            id={name}
                            name={name}
                            className={`${styles['inputField']} rounded-lg h-[40px] text-black w-full px-[14px] py-[10px]`}
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
                    </>
                )}
            </div>
        </>
    );
}
