'use client';
import React from 'react';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import SignInForm from '@/app/components/SignInForm';
import { JSX, FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page(): JSX.Element {
    const router = useRouter();
    const [signupData, setSignupData] = useState({});
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const signupDataString = sessionStorage.getItem('signupData') ?? '';
            if (!signupDataString) {
                router.push('/signup');
                alert('No signup data found. Please start the signup process again.');
            } else {
                setSignupData(JSON.parse(signupDataString));
            }
        }
    }, [router]);

    const handleSignUpSecondStage: (e: FormEvent) => Promise<void> = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!signupData) {
            return
        }
        const updatedSignupData = {
            ...signupData,
            firstName: fullName.split(' ')[0],
            lastName: fullName.split(' ')[1],
            age: Number(age),
            gender: gender,
        };
        try {
            console.log(updatedSignupData)
            const response = await fetch(`http://localhost:3001/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSignupData),
            })
            if (!response.ok) {
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.message || errorData.statusCode}`);
                return;
            }
            router.push('/dashboard');
        } catch (error) {
            console.error('Sign-up step 2 error:', error);
            alert(`An error occurred. ${error}`);
        } finally {
            setLoading(false);
        }
    };
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false);
    const onAgeChange: (e: React.ChangeEvent) => void = (e) => {
        if (!(e.target instanceof HTMLInputElement)) {
            return;
        }

        if (isNaN(Number(e.target.value))) {
            return;
        }
        setAge(e.target.value);
    };
    const onGenderChange: (e: React.ChangeEvent) => void = (e) => {
        if (!(e.target instanceof HTMLSelectElement)) {
            return;
        }
        setGender(e.target.value);
    };
    return (
        <SignInForm
            title="Let we know you more"
            onSubmit={handleSignUpSecondStage}
        >
            <Input
                label="fullName"
                type="text"
                value={fullName}
                onChange={(e) => {
                    setFullName(e.target.value);
                }}
                name="fullName"
                placeholder="Your Name"
            />
            <Input
                label="age"
                type="text"
                value={age}
                onChange={(e: ChangeEvent) => {
                    onAgeChange(e);
                }}
                name="age"
                placeholder="Age"
            />
            <Input
                label="gender"
                type="select"
                value={gender}
                onChange={(e: ChangeEvent) => {
                    onGenderChange(e);
                }}
                name="gender"
                placeholder="Gender"
                options={[
                    { value: '', label: 'Gender' },
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'non-binary', label: 'Non-Binary' },
                ]}
            />
            <Button type="submit" disabled={loading}>
                {!loading ? `Let's Start` : `Loading...`}
            </Button>
        </SignInForm>
    );
}
