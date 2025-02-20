import React from 'react';
import styles from '../styles/SignIn.module.css';
import { JSX } from 'react';
import Title from './Title';

export interface SignInFormProps {
    children?: React.ReactNode;
    title: string;
    onSubmit: (e: React.FormEvent) => void;
}

export default function SignInForm({
    children,
    title,
    onSubmit,
}: SignInFormProps): JSX.Element {
    return (
        <div className={`w-full items-center flex flex-col`}>
            <Title title={title} />
            <form
                onSubmit={onSubmit}
                className={`${styles.form}`}
                method="POST"
            >
                <div className={`flex flex-col gap-y-[20px]`}>{children}</div>
            </form>
        </div>
    );
}
