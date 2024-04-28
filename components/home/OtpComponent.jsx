"use client"; // Assuming you still want 'use client'
import { Button, HStack, Link, PinInput, PinInputField } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OtpComponent = ({ email }) => {
    const [enteredOTP, setEnteredOTP] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (enteredOTP === '123456') {
            router.push('/get-started');
        }
    }, [enteredOTP, router]);

    return (
        <div className='flex flex-col space-y-5 mx-8'>
            <h1 className='font-semibold text-3xl'>We emailed you a code</h1>
            <p>Enter the verification code sent to:</p>
            <p className='flex items-center justify-center'>
                <span className='font-semibold bg-yellow-100'>{email}</span> {/* Display email */}
                <Icon icon="akar-icons:pencil" width={20} className='mx-3' />
            </p>

            <div className='border rounded-2xl p-3 flex items-center justify-center'>
                <PinInput type='alphanumeric' variant={"unstyled"} onChange={(value) => setEnteredOTP(value)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </div>
        </div>
    )
}

export default OtpComponent
