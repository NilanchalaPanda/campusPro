'use client'

import { useState } from 'react'
import { MessageCircleCodeIcon, X } from 'lucide-react'
import { ChatSectionComponent } from '@/components'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='flex h-screen w-full items-center justify-center bg-orange-100 text-center text-4xl font-bold'>
        HELLO, THIS IS THE <br /> DUMMY WEBSITE OF GOVERNEMNT OF REAJASTHAN
      </div>

      <div className='flex h-screen w-full items-center justify-center bg-orange-200 text-center text-4xl font-bold'>
        NOW WE WILL TALK BULLSHIT 😀
      </div>

      <button
        onClick={toggleModal} // Trigger modal open/close
        className='fixed bottom-5 right-5 rounded-full border-2 border-blue-400 bg-blue-300 p-3 hover:cursor-pointer md:bottom-10 md:right-10'
      >
        {isModalOpen ? <X size={40} /> : <MessageCircleCodeIcon size={40} />}
      </button>

      {isModalOpen && (
        <div className='fixed bottom-[85px] right-[85px] flex items-center justify-center rounded-xl bg-opacity-50'>
          <ChatSectionComponent />
        </div>
      )}
    </div>
  )
}
