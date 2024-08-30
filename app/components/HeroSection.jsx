import { ChartBarIcon, MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <section className='flex flex-col md:flex-row h-[80vh] items-center justify-between px-4 md:px-8'>
      <div className='flex flex-col items-start w-full md:w-1/2 space-y-6 md:space-y-8'>
        <h1 className='text-3xl font-extrabold leading-tight md:text-5xl md:leading-[4rem]'>
          The Complete AI based <br className='hidden md:block' /> College Chatbot
        </h1>
        <p className='text-lg font-medium md:text-xl'>
          The all-in-one platform for answering all your queries related to
          Engineering Colleges.
        </p>

        <div className='flex flex-col md:flex-row md:gap-x-4'>
          <button className='flex items-center gap-x-2 bg-violet-800 px-4 py-2 text-white rounded-md shadow-md hover:bg-violet-700'>
            Get Started - It's Free
            <MoveUpRight />
          </button>

          <Link
            href='/chat'
            className='flex items-center gap-x-2 mt-4 md:mt-0 bg-gray-500 px-4 py-2 text-white rounded-md shadow-md hover:bg-gray-400'
          >
            Chatting Page <ChartBarIcon />
          </Link>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
        <img
          src='/path-to-your-image.jpg'
          alt='College Counseling'
          className='object-cover w-full h-full max-w-md md:max-w-lg rounded-lg shadow-lg'
        />
      </div>
    </section>
  )
}

export default HeroSection
