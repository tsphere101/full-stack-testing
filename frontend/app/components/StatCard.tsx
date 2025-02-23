import React, { FC } from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: React.ReactNode;
}

const ArrowUpRight = () => (
    <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_4245_194)">
            <path
                d="M2.28483 7.01038L7.61816 1.67704"
                stroke="#14CA74"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.61816 6.70532V1.67704H2.58988"
                stroke="#14CA74"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_4245_194">
                <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(0.95166 0.34375)"
                />
            </clipPath>
        </defs>
    </svg>
);

const ArrowDownRight = () => (
    <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.79785 1.67704L7.13119 7.01038"
            stroke="#FF5A65"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.10303 7.01038L7.13131 7.01038L7.13131 1.98209"
            stroke="#FF5A65"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const StatCard: FC<StatCardProps> = ({
    title,
    value,
    change,
    isPositive,
    icon,
}) => {
    return (
        <div className="bg-secondary-1 p-4 rounded-lg w-full shadow-md border-[#121826] border">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-300">
                    {icon}
                    <span className="text-sm font-medium">{title}</span>
                </div>
                <button className="text-gray-400">⋮</button>
            </div>
            <div className="flex gap-2 items-center">
                <div className="text-white text-[24px] font-semibold">
                    {value}
                </div>
                <div
                    className={`h-[18px] mt-1 flex items-center text-xs rounded-sm w-fit 
          ${isPositive ? 'bg-[#05C168]/20 text-[#05C168] border border-[#05C168]/20' : 'bg-[#FF5A65]/20 text-[#FF5A65] border border-[#FF5A65]/20'}`}
                >
                    <span
                        className={`text-[10px] ml-1 ${isPositive ? 'text-[#05C168]' : 'text-[#FF5A65]'}`}
                    >
                        {change}
                    </span>
                    {isPositive ? <ArrowUpRight /> : <ArrowDownRight />}
                </div>
            </div>
        </div>
    );
};

export default StatCard;
