"use client";
import { Button, Input, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import React from 'react'

const StepTwo = ({ prevStep, nextStep }) => {

  const animals = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
  ];

  return (
    <div className='flex flex-col space-y-5 py-9 px-10 mx-8'>
      {/* eslint-disable-next-line */}
      <h1 className='font-semibold text-3xl'>What do you do?</h1>
      <div>
        <Text className='text-sm font-bold p-1'>Skills</Text>
        <Input
          focusBorderColor='gray.300' type='email' placeholder='Add up to three skills' padding={6}
        />
        <Text className='text-xs font-light p-1'>
          Brand Designer, Copywriter, Project Manager, etc.
        </Text>
      </div>
      <div>
        <Text className='text-sm font-bold p-1'>Hourly rate</Text>
        <Input
          focusBorderColor='gray.300' type='email' placeholder='Select your hourly rate' padding={6}
        />
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
    </div>
  )
}

export default StepTwo
