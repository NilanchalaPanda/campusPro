'use client'

import { FormProvider } from '@/context/FormContext'
import {
  AcademicInformation,
  BasicInformation,
  CollegePreference,
  FinanceNdReservationInformation,
  ReviewNdSubmit,
} from './_components'
import useMultiStepForm from '@/hooks/useMultiStepForm'

const SignupPage = () => {
  const { step, nextStep, prevStep, setStep } = useMultiStepForm()

  const steps = [
    BasicInformation,
    AcademicInformation,
    CollegePreference,
    FinanceNdReservationInformation,
    ReviewNdSubmit,
  ]

  const StepComponent = steps[step]

  return (
    <FormProvider>
      <div className='p-4'>
        <div className='mb-4 flex justify-between'>
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === index
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-300 text-gray-600'
              } transition-colors duration-300 ease-in-out`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={prevStep}
            className='mb-4 rounded-md bg-gray-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'
          >
            Previous
          </button>
        )}

        <div className='animate-fadeIn'>
          <StepComponent nextStep={nextStep} />
        </div>
      </div>
    </FormProvider>
  )
}

export default SignupPage
