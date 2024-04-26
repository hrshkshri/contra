"use client";
import { Button, Input, Text } from '@chakra-ui/react'
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import React from 'react'

const StepTwo = () => {

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
        <div className="flex w-full flex-nowrap gap-4">
          <Select
            label="Select your hourly rate"
            className="w-full border-2 border-gray-300"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}
              className='bg-white size-sm'
              >
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
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
      >
        Continue
      </Button>
    </div>
  )
}

export default StepTwo
