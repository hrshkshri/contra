"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Input, Link } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const EmailComponent = ({ onContinue, onEmailUpdate }) => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    return (
        <div className='flex flex-col space-y-5 mx-8'>
            <Breadcrumb className='pt-4'>
                <BreadcrumbItem>
                    <BreadcrumbLink className='flex items-center justify-center'>
                        <Icon icon="uiw:left" className='mx-3' />
                        <span>
                            Sign up as Client
                        </span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1 className='font-semibold text-3xl'>First, enter your email</h1>
            <Button
                size='xl'
                height='48px'
                width='100%'
                border='1px'
                borderColor='gray.300'
                rounded="3xl"
                bgColor={'white'}
            >
                <Icon icon="flat-color-icons:google" width={20} className='mx-3' />
                Continue with google
            </Button>
            <span className='flex flex-row text-xs font-extralight py-3'>OR SIGN UP WITH </span>
            <Input
                className='pt-4'
                focusBorderColor='gray.300' type='email' placeholder='name@email.com' padding={6}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(validateEmail(e.target.value));
                }}
            />
            <Button
                size='xl'
                height='48px'
                width='100%'
                border='1px'
                rounded="3xl"
                bgColor={isEmailValid ? 'black' : 'gray.300'}
                color={'white'}
                onClick={() => {
                    isEmailValid && onContinue();
                    onEmailUpdate(email);
                }}
            >
                Continue
            </Button>
            <Link>
                <a className='text-sm text-black'>Already have an account? <span className='text-purple-800'>Sign in</span></a>
            </Link>
        </div>
    )
}

export default EmailComponent
