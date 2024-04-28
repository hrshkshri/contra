"use client";
import { Button, Input, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react'
import ContinueButton from './utilityComponent/ContinueButton';

const StepFour = ({ prevStep, nextStep }) => {
    return (
        <div className='flex flex-col space-y-5 mx-8'>
            <Icon icon="uiw:left" color='black' className='cursor-pointer lg:hidden' onClick={prevStep} />
            <div className='flex flex-col space-y-2'>
                <h1 className='font-semibold text-3xl'>Upload a photo</h1>
                <Text className='text-md font'>Add a photo to help build connection and trust.</Text>
            </div>
            <div>
                <Button
                    border='1px'
                    color={'black'}
                    rounded="full"
                    padding={6}
                    bgColor={'white'}
                >
                    Upload profile photo
                </Button>
            </div>
            <div className='flex flex-row space-x-3 py-3'>
                <Button
                    size='xl'
                    height='48px'
                    width='10%'
                    border='1px'
                    rounded="full"
                    bgColor={'white'}
                    color={'gray.300'}
                    onClick={prevStep}
                >
                    <Icon icon="uiw:left" color='black' />
                </Button>
                <ContinueButton nextStep={nextStep} />
            </div>
        </div>
    )
}

export default StepFour
