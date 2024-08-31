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
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>LOGIN</h1>
      <Link href='/signup' className='underline'>
        SignUp
      </Link>
      <div className='mx-auto my-7 flex w-[95%] flex-col items-center justify-center rounded-xl border-2 border-gray-400 md:mt-20 md:w-[75%] md:flex-row'>
        <div className='w-full space-y-6 px-6 py-5 md:w-[55%]'>
          <p className='text-3xl font-bold md:text-[3.2rem] md:leading-[3rem]'>
            Join thousands of students who have already using CampusPro.
          </p>

          <div className='hidden md:block md:space-y-3 md:pl-4'>
            <p className='flex items-center justify-start gap-x-2'>
              <CircleCheckBig />
              Lorem ipsum dolor sit amet, consectetu Voluptate autem?
            </p>
            <p className='flex items-center justify-start gap-x-2'>
              <CircleCheckBig /> Lorem ipsum dolor sit consectetur adipisicing
              elit?
            </p>
            <p className='flex items-center justify-start gap-x-2'>
              <CircleCheckBig /> Solor sit amet, consectetur adipisicing elit
              voluptate?
            </p>
          </div>
        </div>
        <div className='w-full border-t-2 border-gray-400 p-5 md:w-1/2 md:border-l-2 md:border-t-0 md:p-10'>
          <div>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className='block font-semibold text-gray-700'>
                  Name
                </label>
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
                <label className='block font-semibold text-gray-700'>
                  Email
                </label>
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
      </div>
    </div>
  )
}

export default LoginPage
