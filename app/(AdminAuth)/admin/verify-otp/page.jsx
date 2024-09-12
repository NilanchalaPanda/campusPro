'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyOTP() {
  const [otp, setOtp] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleOtpChange = (e) => {
    setOtp(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email }),
      })

      const data = await response.json()
      if (response.ok) {
        router.push('/admin/analytics')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('OTP verification request error:', error)
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-center text-2xl font-bold text-[#1359a1]'>
          Verify OTP
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='otp' className='mb-2 block text-sm font-bold'>
              Enter OTP
            </label>
            <input
              type='text'
              id='otp'
              name='otp'
              value={otp}
              onChange={handleOtpChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full rounded-md bg-[#1359a1] px-4 py-2 font-bold text-white'
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  )
}
