import { Button, Input } from '@chakra-ui/react'
import React from 'react'

const StepOne = ({ nextStep }) => {
    return (
        <div className='flex flex-col space-y-5 py-9 px-10 mx-8'>
            {/* eslint-disable-next-line */}
            <h1 className='font-semibold text-3xl'>What's your name?</h1>
            <div className='flex flex-row space-x-5 pt-3'>
                <Input
                    className='pt-4'
                    focusBorderColor='gray.300' type='email' placeholder='First Name' padding={6}
                />
                <Input
                    className='pt-4'
                    focusBorderColor='gray.300' type='email' placeholder='Last Name' padding={6}
                />
            </div>
            <Button
                size='xl'
                height='48px'
                width='30%'
                border='1px'
                rounded="3xl"
                bgColor={'black'}
                color={'white'}
                _hover={{ bgColor: 'gray.700' }}
                onClick={nextStep}
            >
                Continue
            </Button>
        </div>
    )
}

export default StepOne
