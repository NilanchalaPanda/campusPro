import { ChartBarIcon, MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <main className='flex h-[80vh] flex-col items-center justify-center gap-y-5 px-4 text-center'>
      <h1 className='text-[2.6rem] font-extrabold leading-[3.3rem] md:text-[6rem] md:leading-[5.5rem]'>
        The Complete AI based <br className='hidden md:block' /> College Chatbot
      </h1>
      <p className='text-md font-semibold md:text-xl'>
        The all-in-one platform for answering all your queries related to
        Engineering Colleges.
      </p>

      <div className='flex flex-col gap-y-3 md:flex-row md:gap-x-4'>
        <button className='flex gap-x-1 bg-violet-800 px-4 py-2 text-white'>
          Get Started - Its free
          <MoveUpRight />
        </button>

        <Link
          href='/chat'
          className='flex gap-x-2 bg-gray-500 px-4 py-2 text-white'
        >
          Chatting Page <ChartBarIcon />
        </Link>
      </div>
    </main>
  )
}

export default HeroSection
