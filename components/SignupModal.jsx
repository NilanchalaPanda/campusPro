'use client'
import { useState } from 'react'
import Link from 'next/link'

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black opacity-50'
        onClick={onClose}
      ></div>
      <div className='relative z-10 w-80 rounded-lg bg-white p-6 shadow-lg'>
        <button
          className='absolute right-1 top-0  rounded-full p-3 text-5xl'
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className='mb-4 text-center text-xl font-bold'>Sign Up As</h2>
        <div className='flex justify-between gap-4'>
          <Link
            href='/signup'
            className='flex-1 cursor-pointer rounded-lg bg-violet-600 py-2 text-center text-white transition duration-300 ease-in-out hover:bg-violet-700'
          >
            Student
          </Link>
          <Link
            href='/login'
            className='flex-1 cursor-pointer rounded-lg bg-violet-600 py-2 text-center text-white transition duration-300 ease-in-out hover:bg-violet-700'
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
