import { MoveUpRight } from 'lucide-react'
function CTA() {
  return (
    <div className='container flex w-[90vw] max-w-[90rem] flex-col items-center justify-center rounded-xl border-2 border-gray-400 md:w-[80vw] md:flex-row'>
      <div className='w-full space-y-4 px-3 py-4 md:w-[50%] md:px-10'>
        <h1 className='text-3xl font-bold md:text-6xl'>
          Choose better with CampusPro
        </h1>
        <p className='text-md font-semibold'>
          Craft your future decision with the <br className='block md:hidden' />{' '}
          power of AI
        </p>
      </div>

      <div className='w-full border-t-2 border-gray-400 md:w-[50%] md:border-0 md:border-l-2'>
        <div className='space-y-3 border-b-2 border-gray-400 p-5'>
          <h1 className='flex justify-between text-2xl font-semibold'>
            Learn more about CampusPro <MoveUpRight />{' '}
          </h1>
          <p className='font-medium'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='space-y-3 p-5'>
          <h1 className='flex justify-between text-2xl font-semibold'>
            Talk to an Expert <MoveUpRight />{' '}
          </h1>
          <p className='font-medium'>
            mollitia consectetur ipsa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CTA
