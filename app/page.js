'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircleCodeIcon, X } from 'lucide-react'
import { SmallChatModel } from '@/components'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='relative flex flex-col items-center justify-center bg-[#ffffff] px-4'>
      <div className='container mx-auto flex items-center p-4 pl-6'>
            <Image src='/Stateemblem.png' width={35} height={35} alt='Symbol' />
            <div className='pl-4 text-xl font-bold text-black md:text-2xl'>
              Govt. of Rajasthan
            </div>
          </div>
      <header className='w-full bg-[#1359a1] shadow'>
        <div className='container mx-auto flex items-center justify-between p-4'>
         
          <nav className='space-x-12 text-sm md:text-base '>
            <a href='#' className='text-white hover:text-gray-300'>About Us</a>
            <a href='#' className='text-white hover:text-gray-300'>Admissions</a>
            <a href='#' className='text-white hover:text-gray-300'>Students Corner</a>
            <a href='#' className='text-white hover:text-gray-300'>Employee Corner</a>
            <a href='#' className='text-white hover:text-gray-300'>Documents</a>
            <a href='#' className='text-white hover:text-gray-300'>RTI</a>
            <a href='#' className='text-white hover:text-gray-300'>Tenders & Auctions</a>
            <a href='#' className='text-white hover:text-gray-300'>Roster</a>
            <a href='#' className='text-white hover:text-gray-300'>Colleges</a>
            <a href='#' className='text-white hover:text-gray-300'>NOC</a>
            <a href='#' className='text-white hover:text-gray-300'>Other Links</a>
          </nav>
        </div>
      </header>

      <main className='flex-1 p-4 md:p-8'>
        <div className='flex  gap-2 justify-'>
          <div className='flex flex-col items-center w-full max-w-xs md:max-w-sm'>
            <img
              src='/image1.png'
              alt='Officer'
              className='h-32 w-32 rounded-md border-2 border-black md:h-48 md:w-48'
            />
            <p className='mt-2 text-xs font-bold text-center md:text-sm'>
              Hon'ble Chief Minister
              <br />
              Shri Bhajan Lal Sharma
            </p>
          </div>

          <div className='flex flex-col items-center w-full max-w-xs md:max-w-sm'>
            <img
              src='/image2.jpeg'
              alt='Officer'
              className='h-32 w-32 rounded-md border-2 border-black md:h-48 md:w-48'
            />
            <p className='mt-2 text-xs font-bold text-center md:text-sm'>
              Hon'ble Dy. Chief Minister
              <br />
              & Minister of Technical Education
              <br />
              Dr. Prem Chand Bairwa
            </p>
          </div>

          <div className='flex flex-col items-center w-full max-w-xs md:max-w-sm'>
            <img
              src='/image3.jpeg'
              alt='Officer'
              className='h-32 w-32 rounded-md border-2 border-black md:h-48 md:w-48'
            />
            <p className='mt-2 text-xs font-bold text-center md:text-sm'>
              Secretary, Higher & Tech. Education Dept.
              <br />
              Dr. Arushi Ajey Malik (IAS)
            </p>
          </div>

          <div className='flex flex-col items-center w-full max-w-xs md:max-w-sm'>
            <img
              src='/image4.jpg'
              alt='Officer'
              className='h-32 w-32 rounded-md md:h-48 md:w-48'
            />
            <p className='mt-2 text-xs font-bold text-center md:text-sm'>
              Director, Technical Education (Polytechnic)
              <br />
              Shri Anshu Kumar Sahgal
            </p>
          </div>
        </div>

        <div className='mt-8 w-full bg-[#f8f8f8] p-4 shadow'>
          <h2 className='mb-4 text-xl font-bold md:text-2xl'>Latest News</h2>
          <div className='relative overflow-hidden text-[#007bff]'>
            <div className='news-rotate space-y-2 text-left'>
              <p className='text-base md:text-lg'>New policy announced by the Govt.</p>
              <p className='text-base md:text-lg'>Infrastructure development project approved.</p>
              <p className='text-base md:text-lg'>New education scheme launched.</p>
              <p className='text-base md:text-lg'>Health initiative for rural areas started.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-[#323131] p-8 text-white'>
        <div className='container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
          <div>
            <h3 className='mb-2 text-lg font-bold'>Contact No. & Email:</h3>
            <div className='text-sm'>
              <p>Phone No.: 0291-2434395</p>
              <p>Fax: 0291-2430398</p>
              <p>Email: dte_raj@rajasthan.gov.in</p>
              <p>Nodal Officer: Ajay Agarwal, ADTE</p>
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-bold'>Directorate Address</h3>
            <div className='text-sm'>
              <p>W-6, Gaurav Path, Residency Road,</p>
              <p>Jodhpur (Rajasthan) - 342032</p>
              <p>Website visit count: 5</p>
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-bold'>Website Design & Updated by:</h3>
            <div className='text-sm'>
              <p>Directorate of Technical Education, Jodhpur</p>
              <p>Copyright ©2019 Directorate Of Technical Education, Rajasthan</p>
              <p>Last Updated: 9/11/2024, 10:28:47 AM</p>
            </div>
          </div>
        </div>
      </footer>

      <div className='flex h-screen w-full items-center justify-center bg-orange-200 text-center text-4xl font-bold'>
        FEATURES SECTION WILL COME HERE
      </div>

      {!isModalOpen && (
        <button
          onClick={toggleModal}
          className='fixed bottom-5 right-5 rounded-full border-2 border-purple-400 bg-purple-300 p-3 hover:cursor-pointer md:bottom-10 md:right-10'
        >
          <MessageCircleCodeIcon size={40} />
        </button>
      )}

      {isModalOpen && (
        <div className='fixed bottom-3 right-3 flex h-[80vh] w-[90%] max-w-md items-center justify-center rounded-2xl md:bottom-10 md:right-10 md:h-[70vh] md:w-[30%]'>
          <button
            onClick={toggleModal}
            className='absolute right-2 top-3 hover:scale-110'
          >
            <X strokeWidth={3} />
          </button>
          <SmallChatModel />
        </div>
      )}
    </div>
  )
}
