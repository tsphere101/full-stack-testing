'use client';
import React from 'react';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import SignInForm from '@/app/components/SignInForm';
import { JSX, FormEvent, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Page(): JSX.Element {
    const router = useRouter();
    const handleSignUpSecondStage: (e: FormEvent) => void = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoading(false);
        router.push('/dashboard');
    };
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false);
    const onAgeChange: (e: React.ChangeEvent) => void = (e) => {
        // Check if e is input element
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
