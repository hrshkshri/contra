"use client";
import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'

const GetStarted = () => {

  const [currentStep, setCurrentStep] = React.useState('StepOne');
  return (
    <>

      {currentStep === 'StepOne' && (
        <StepOne nextStep={() => setCurrentStep('StepTwo')} />
      )}
      {currentStep === 'StepTwo' && (
        <StepTwo prevStep={() => setCurrentStep('StepOne')} nextStep={() => setCurrentStep('StepThree')} />
      )}
      {currentStep === 'StepThree' && (
        <StepThree prevStep={() => setCurrentStep('StepTwo')} nextStep={() => setCurrentStep('StepFour')} />
      )}
      {currentStep === 'StepFour' && (
        <StepFour prevStep={() => setCurrentStep('StepThree')} nextStep={() => setCurrentStep('StepFive')} />
      )}
      {currentStep === 'StepFive' && (
        <StepFive prevStep={() => setCurrentStep('StepFour')} />
      )}
    </>

  )
}

export default GetStarted
