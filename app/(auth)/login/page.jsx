'use client'

import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
    })

    if (res?.ok) {
      router.push('/chat')
    }

    if (res?.error) {
      console.log('Error : ', res.error)
      toast.error(res.error || 'Entered credentails are invalid')
    }
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-200 via-purple-300 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <h1 className='mb-6 text-3xl font-extrabold text-gray-800'>
            Welcome Back to CampusPro
          </h1>
          <p className='text-lg text-gray-600'>
            Log in to access your personalized college counseling
          </p>
        </div>
        <div className='w-full border-t-2 border-gray-400 p-5 md:w-1/2 md:border-l-2 md:border-t-0 md:p-10'>
          <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='block font-semibold text-gray-700'>Name</label>
              <input
                type='text'
                placeholder='Enter your first name'
                {...register('name', { required: 'Name is required' })}
                className={`mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className='text-sm text-red-500'>{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className='block font-semibold text-gray-700'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                {...register('email', { required: 'Email is required' })}
                className={`mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className='text-sm text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className='block font-semibold text-gray-700'>
                Phone No
              </label>
              <input
                type='tel'
                placeholder='Enter your phone number'
                {...register('phone', {
                  required: 'Phone number is required',
                })}
                className={`mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
              {errors.phone && (
                <p className='text-sm text-red-500'>{errors.phone.message}</p>
              )}
            </div>
            <button
              type='submit'
              className='mt-6 w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* UI LOGIC - SHILPA WROTE THIS PART. */}
      {/* <div className='rounded-lg bg-white px-6 py-5 shadow sm:px-10'>
        <form className='space-y-4'>
          <div>
            <label className='block font-semibold text-gray-700'>
              First Name
            </label>
            <input
              type='text'
              placeholder='Enter your first name'
              className='mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <div>
            <label className='block font-semibold text-gray-700'>
              Last Name
            </label>
            <input
              type='text'
              placeholder='Enter your last name'
              className='mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <div>
            <label className='block font-semibold text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <div>
            <label className='block font-semibold text-gray-700'>
              Phone No
            </label>
            <input
              type='tel'
              placeholder='Enter your phone number'
              className='mt-1 w-full rounded-md border-2 border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500'
            />
          </div>
          <button
            type='submit'
            className='mt-6 w-full rounded-md bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700'
          >
            Login
          </button>
          <p className='mt-4 text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <Link
              href='/signup'
              className='font-bold text-purple-600 underline'
            >
              Register here
            </Link>
            .
          </p>
        </form>
      </div> */}
    </div>
  )
}

export default LoginPage
