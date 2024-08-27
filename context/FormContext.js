'use client'

import { createContext, useContext, useState } from 'react'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('formData')
      return savedData ? JSON.parse(savedData) : {}
    }
    return {}
  })

  const updateFormData = (data) => {
    setFormData((prevData) => {
      const newData = { ...prevData, ...data }
      localStorage.setItem('formData', JSON.stringify(newData))
      return newData
    })
  }

  const clearFormData = () => {
    setFormData({})
    if (typeof window !== 'undefined') {
      localStorage.removeItem('formData')
    }
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
