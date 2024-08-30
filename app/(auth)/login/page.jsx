import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'

function page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-purple-300  py-12 px-4 sm:px-6 lg:px-8'>

      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-gray-800 mb-6'>
            Welcome Back to CampusPro
          </h1>
          <p className='text-lg text-gray-600'>
            Log in to access your personalized college counseling 
          </p>
        </div>
        <div className='bg-white py-5 px-6 shadow rounded-lg sm:px-10'>
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
              <label className='block font-semibold text-gray-700'>
                Email
              </label>
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
              <Link href='/signup' className='font-bold text-purple-600 underline'>
                Register here
              </Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
