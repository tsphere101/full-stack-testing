'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';
import styles from '../styles/SignIn.module.css';
import {
    FormEvent,
    FormEventHandler,
    SetStateAction,
    useState,
    Dispatch,
} from 'react';

export default function SignUpPage() {
    const router = useRouter();
    const handleSignUp: FormEventHandler = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            const data = { email, password };
            sessionStorage.setItem('signupData', JSON.stringify(data));
            router.push('/signup/details'); // Use router.push to navigate
        } catch (error) {
            console.error('Sign-up step 1 error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    type ToggleFunctionType<T> = (
        state: T,
        dispatcher: Dispatch<SetStateAction<T>>
    ) => () => void;
    const toggleBoolean: ToggleFunctionType<boolean> =
        (state, dispatcher) => () =>
            dispatcher(!state);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className={`w-full items-center flex flex-col`}>
                <Title title="Create an account" />
                <form
                    onSubmit={handleSignUp}
                    className={`${styles.form}`}
                    method="POST"
                >
                    <div className={`${styles.inputGroup} gap-y-[20px]`}>
                        <Input
                            label="Email"
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            toggleShowPassword={toggleBoolean(
                                showPassword,
                                setShowPassword
                            )}
                            name="password"
                            placeholder="Password"
                            isPasswordInput={true}
                        />
                        <Input
                            label="ConfirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            toggleShowPassword={toggleBoolean(
                                showConfirmPassword,
                                setShowConfirmPassword
                            )}
                            name="confirm-password"
                            placeholder="Confirm Password"
                            isPasswordInput={true}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            className={styles.signInButton}
                        >
                            {!loading ? 'Sign in' : 'Loading...'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
