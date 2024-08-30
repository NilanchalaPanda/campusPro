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

      // Clear local storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('formData')
      }

      // Clear form data context
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
    <div className='p-4'>
      <div>
        <h1 className='text-3xl font-bold'>
          Final Check: Your Engineering Master Plan
        </h1>
        <p className='font-semibold text-black'>
          Review your comprehensive application to ensure every detail is
          precise. This is your chance to make sure your engineering journey is
          perfectly mapped out.
        </p>
      </div>
      <div className='space-y-4'>
        {Object.keys(formData).length > 0 ? (
          <div className='rounded-md bg-white p-4 shadow'>
            <h3 className='mb-2 text-lg font-medium'>Preview:</h3>
            <pre className='whitespace-pre-wrap'>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        ) : (
          <p className='text-gray-500'>No data available to display.</p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className='mt-4 rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
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
