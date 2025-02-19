"use client"
import { FormEventHandler, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from '../styles/SignIn.module.css';

export default function SignIn() {
    const handleSignin: FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const toggleShowPassword: () => void = () => setShowPassword(!showPassword)
    return (
        <>
            <div className={`flex flex-row h-screen w-full`}>
                <div className={` w-[127.84810127%] flex flex-col justify-center`}>
                    <div className={`w-full items-center flex flex-col`}>
                        <div className={`w-full max-w-[400px]`}>
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
                    </div>
                </div >
                <div className={`bg-[#4338CA] w-full rounded-bl-[36px] rounded-tl-[36px]`} ></div >
            </div >
        </>

    )
}
