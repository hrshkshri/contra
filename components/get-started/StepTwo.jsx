"use client";
import { Button, Input, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { Select } from 'chakra-react-select';
import React from 'react'
import './StepTwo.css'

const StepTwo = ({ prevStep, nextStep }) => {


  const skills = [
    { value: 'brand-designer', label: 'Brand Designer' },
    { value: 'copywriter', label: 'Copywriter' },
    { value: 'project-manager', label: 'Project Manager' },
    { value: 'web-developer', label: 'Web Developer' },
    { value: 'graphic-designer', label: 'Graphic Designer' },
  ];

  const rate = [
    { value: '10', label: '$10/hr' },
    { value: '20', label: '$20/hr' },
    { value: '30', label: '$30/hr' },
    { value: '40', label: '$40/hr' },
    { value: '50', label: '$50/hr' },
  ];

  return (
    <div className='flex flex-col space-y-5 py-9 px-10 mx-8'>
      {/* eslint-disable-next-line */}
      <h1 className='font-semibold text-3xl'>What do you do?</h1>
      <div>
        <Text className='text-sm font-bold p-1'>Skills</Text>
        <Select
          className="select-skills"
          useBasicStyles
          isMulti
          selectedOptionStyle='color'
          selectedOptionColorScheme='gray.300'
          size={'lg'}
          focusBorderColor='gray.300' placeholder='Add upto three skills' padding={6}
          options={skills}
          colorScheme="gray"
        />
        <Text className='text-xs font-light p-1'>
          Brand Designer, Copywriter, Project Manager, etc.
        </Text>
      </div>
      <div>
        <Text className='text-sm font-bold p-1'>Hourly rate</Text>

        <Select
          className="select-rate"
          useBasicStyles
          selectedOptionStyle='color'
          selectedOptionColorScheme='gray.500'
          size={'lg'}
          focusBorderColor='gray.300' placeholder='Select your hourly rate' padding={10}
          options={rate}
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
