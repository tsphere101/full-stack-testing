import React from 'react';
interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className={`flex flex-row w-full  h-screen`}>
            <div className={`w-[127.84810127%] flex flex-col justify-center`}>
                {children}
            </div>
            <div
                className={`bg-[#4338CA] w-full rounded-bl-[36px] rounded-tl-[36px]`}
            ></div>
        </div>
    );
}
