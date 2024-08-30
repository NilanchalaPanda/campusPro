'use client'

import { useFormContext } from '@/context/FormContext'
import { useState } from 'react'

const ReviewNdSubmit = () => {
  const { formData, clearFormData } = useFormContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmissionStatus('')

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      const result = await response.json()
      console.log('Submission result:', result)

      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('formData')
      }

      clearFormData()

      setSubmissionStatus('Submission successful!')
    } catch (error) {
      console.error('Submission error:', error)
      setSubmissionStatus('Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Final Check: Your Engineering Master Plan
        </h1>
        <p className='mt-2 text-gray-600'>
          Review your comprehensive application to ensure every detail is
          precise. This is your chance to make sure your engineering journey is
          perfectly mapped out.
        </p>
      </div>
      <div className='mb-6'>
        {Object.keys(formData).length > 0 ? (
          <div className='bg-white rounded-md p-4 shadow-sm'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Preview:</h3>
            <pre className='whitespace-pre-wrap text-gray-800'>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        ) : (
          <p className='text-gray-500'>No data available to display.</p>
        )}
      </div>
      <div className='flex justify-end items-center space-x-4'>
        <button
          onClick={handleSubmit}
          className='bg-indigo-600 text-white rounded-md px-4 py-2 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button
          onClick={() => window.history.back()}
          className='bg-gray-300 text-gray-800 rounded-md px-4 py-2 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        >
          Back
        </button>
      </div>
      {submissionStatus && (
        <p
          className={`mt-4 text-sm ${submissionStatus.includes('failed') ? 'text-red-600' : 'text-green-600'}`}
        >
          {submissionStatus}
        </p>
      )}
    </div>
  )
}

export default ReviewNdSubmit
