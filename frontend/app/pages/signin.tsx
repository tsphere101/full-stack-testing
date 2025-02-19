"use client"
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from '../styles/SignIn.module.css';

export default function SignIn() {
    const handleSignin = async (e: React.FormEvent) => { }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const toggleShowPassword: () => void = () => setShowPassword(!showPassword)
    return (
        <>
            <div className={`flex flex-row w-full ${styles.darkPurpleBackground}`}>
                <div className={`${styles.container} w-[127.84810127%]`}>
                    <div className={`w-full items-center flex flex-col`}>
                        <h1 className={styles.title}>Sign in</h1>
                        <form onSubmit={handleSignin} className={`${styles.form}`} method='POST'>
                            <div className={`${styles.inputGroup} gap-y-[20px]`}>
                                <Input
                                    label="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    name="username"
                                    placeholder="Username"
                                />
                                <Input
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    toggleShowPassword={toggleShowPassword}
                                    name="password"
                                    placeholder="Password"
                                    isPasswordInput={true}
                                />
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className={styles.signInButton}
                                >
                                    {!loading ? 'Sign in' : 'Loading...'}
                                </Button>
                                <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div >
                <div className={`${styles.purpleBackground} w-full rounded-lg`} ></div >
            </div >
        </>

    )
}
