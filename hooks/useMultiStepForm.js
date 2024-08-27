'use client'

import { useState } from 'react'

function useMultiStepForm() {
  const [step, setStep] = useState(0)

  const nextStep = () =>
    setStep((prev) => {
      return prev + 1
    })
  const prevStep = () => setStep((prev) => prev - 1)

  return {
    step,
    nextStep,
    prevStep,
    setStep,
  }
}

export default useMultiStepForm
