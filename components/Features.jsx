import { Brain, ChartArea, Mic, University } from 'lucide-react'

const Features = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-white px-2 md:py-24'>
      <h1 className='text-3xl font-bold md:text-5xl'>FEATURES</h1>
      <p className='text-center text-sm font-medium text-gray-900 md:text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      </p>

      <div className='mx-auto mt-4 max-w-[100%] px-4 sm:px-6 md:max-w-[95%] lg:px-8'>
        <div className='grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4'>
          {/* CHATBOX DIV */}
          <div className='flex flex-col items-center space-y-3 rounded-xl border border-blue-500 bg-blue-100 px-3 py-2 md:py-4'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-blue-300'>
              <ChartArea color='blue' size={35} />
            </div>
            <h3 className='text-xl font-semibold text-black'>Chatbot</h3>
            <p className='text-sm font-medium text-gray-900'>
              An AI chatbot that offers{' '}
              <strong>access to Polytechnic and Engineering colleges</strong>{' '}
              across the various states for students.
            </p>
          </div>

          {/* VOICE ASSISTANT DIV */}
          <div className='flex flex-col items-center space-y-3 rounded-xl border border-orange-500 bg-orange-100 px-3 py-2 md:py-4'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-orange-200'>
              <Mic color='orange' size={35} />
            </div>
            <h3 className='text-xl font-semibold text-black'>
              Voice Assistant
            </h3>
            <p className='text-sm font-medium text-gray-900'>
              Experience <strong>instant and fast queries</strong> through our
              voice assistant, which provides quick answers to all your
              requests.
            </p>
          </div>

          {/* COLLEGE RECOMMENDATIONS */}
          <div className='flex flex-col items-center space-y-3 rounded-xl border border-green-500 bg-green-100 px-3 py-2 md:py-4'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-green-300'>
              <University color='green' size={35} />
            </div>
            <h3 className='text-xl font-semibold text-black'>
              Recommendations
            </h3>
            <p className='text-sm font-medium text-gray-900'>
              Our model <strong>recommends top colleges</strong> based on your
              preferences, helping you make the right decision with ease and
              confidence.
            </p>
          </div>

          {/* INDUSTRY LEADING LLM */}
          <div className='flex flex-col items-center space-y-3 rounded-xl border border-red-500 bg-red-100 px-3 py-2 md:py-4'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-300'>
              <Brain color='red' size={35} />
            </div>
            <h3 className='text-xl font-semibold text-black'>
              Industry Leading LLM
            </h3>
            <p className='text-sm font-medium text-gray-900'>
              Our advanced LLM model scrapes website data to{' '}
              <strong>provide accurate and relevant answers</strong> to all your
              queries efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
