import { Button } from '@chakra-ui/react'
import React from 'react'

const ContinueButton = ({ nextStep }) => {
    return (
        <Button
            size='xl'
            height='48px'
            border='1px'
            rounded="3xl"
            bgColor={'black'}
            color={'white'}
            _hover={{ bgColor: 'gray.700' }}
            onClick={nextStep}
            className='lg:w-1/3 w-full'
        >
            Continue
        </Button>
    )
}

export default ContinueButton
