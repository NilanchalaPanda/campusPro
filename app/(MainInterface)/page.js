'use client'

import { useState } from 'react'
import { MessageCircleCodeIcon, X } from 'lucide-react'
import { SmallChatModel } from '@/components'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='relative flex flex-col items-center justify-center bg-orange-200 px-4'>
      <div className='flex h-screen w-full items-center justify-center bg-orange-100 text-center text-4xl font-bold'>
        HELLO, THIS IS THE <br /> DUMMY WEBSITE OF GOVERNEMNT OF REAJASTHAN
      </div>

      <div className='flex h-screen w-full items-center justify-center bg-orange-200 text-center text-4xl font-bold'>
        FEATURES SECTION WILL COME HERE
      </div>

      {!isModalOpen && (
        <button
          onClick={toggleModal} // Trigger modal open/close
          className='fixed bottom-5 right-5 rounded-full border-2 border-blue-400 bg-blue-300 p-3 hover:cursor-pointer md:bottom-10 md:right-10 md:block'
        >
          <MessageCircleCodeIcon size={40} />
        </button>
      )}

      {isModalOpen && (
        <div className='fixed bottom-3 right-3 flex h-[90vh] items-center justify-center rounded-2xl md:bottom-10 md:right-10 md:h-[70vh] md:w-[30%]'>
          <button
            onClick={toggleModal}
            className='absolute right-2 top-3 hover:scale-110 hover:rounded-sm hover:bg-white'
          >
            <X />
          </button>
          <SmallChatModel />
        </div>
      )}
    </div>
  )
}
