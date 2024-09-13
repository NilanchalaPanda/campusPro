'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLogin() {
  const router = useRouter()
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    employeeEmail: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (emailOrPhone) => {
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailOrPhone }),
      })

      const data = await response.json()
      if (response.ok) {
        setEmailSent(true)
        router.push('/admin/verify-otp')
      } else {
        console.error('Login error:', data.message)
      }
    } catch (error) {
      console.error('Login request error:', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(formData.employeeEmail)
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-50'>
      <div className='flex w-full max-w-md flex-col bg-white p-8 shadow-lg'>
        <div className='mb-4 flex items-center justify-center space-x-5 px-5 text-center text-xl font-bold'>
          <Image
            src='/Stateemblem.png'
            className='mx-auto'
            width={50}
            height={80}
            alt='State Logo  '
          />
          <p className='text-left text-2xl'>
            Government of Technical Education
          </p>
        </div>
        <h1 className='mb-6 text-center text-2xl font-bold text-[#1359a1]'>
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='fullName' className='mb-2 block text-sm font-bold'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='employeeId'
              className='mb-2 block text-sm font-bold'
            >
              Employee ID
            </label>
            <input
              type='text'
              id='employeeId'
              name='employeeId'
              value={formData.employeeId}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='employeeEmail'
              className='mb-2 block text-sm font-bold'
            >
              Employee Email
            </label>
            <input
              type='email'
              id='employeeEmail'
              name='employeeEmail'
              value={formData.employeeEmail}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='mb-2 block text-sm font-bold'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              required
            />
          </div>
          <button
            type='submit'
            className={`w-full rounded-md bg-[#1359a1] px-4 py-2 font-bold text-white ${emailSent ? 'bg-green-400' : ''}`}
          >
            {emailSent ? 'OTP Sent' : 'Login'}
          </button>
        </form>
        {emailSent && (
          <div className='mt-4 text-center'>
            <p className='text-sm text-green-500'>OTP sent to your email</p>
          </div>
        )}
      </div>
    </div>
  )
}
