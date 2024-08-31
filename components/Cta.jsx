import { MoveUpRight } from 'lucide-react'
import React from 'react'

function Cta() {
  return (
    <>
      <div className='container flex w-[90vw] max-w-[90rem] flex-col items-center justify-center rounded-xl border-2 border-gray-400 md:w-[80vw] md:flex-row'>
        <div className='w-full space-y-4 px-3 py-4 md:w-[50%] md:px-10'>
          <h1 className='text-5xl font-bold md:text-6xl'>
            Choose better with CampusPro
          </h1>
          <p className='text-md font-semibold'>
            Craft amazing decision with the <br className='block md:hidden' />{' '}
            power of AI
          </p>
        </div>

        <div className='w-full border-t-2 border-gray-400 md:w-[50%] md:border-0 md:border-l-2'>
          <div className='space-y-3 border-b-2 border-gray-400 p-5'>
            <h1 className='flex justify-between text-2xl font-semibold'>
              Learn more about CampusPro <MoveUpRight />{' '}
            </h1>
            <p className='text-md font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              repellat molestias mollitia consectetur ipsa? Reiciendis aliquam,
              nobis iusto sunt.
            </p>
          </div>
          <div className='space-y-3 p-5'>
            <h1 className='flex justify-between text-2xl font-semibold'>
              Talk to an Expert <MoveUpRight />{' '}
            </h1>
            <p>
              mollitia consectetur ipsa? Reiciendis aliquam, nobis iusto sunt,
              quis ex nihil error accusantium rem ipsa ullam tempore, doloribus
              optio!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center text-black sm:justify-start'></div>

          <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right'>
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Cta
