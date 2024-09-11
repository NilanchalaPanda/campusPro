'use client'

import {
  ChatSectionComponent,
  SmallCollegeRecom,
  SmallRetriveChat,
  SmallUserProfile,
} from '@/components'
import {
  CircleArrowOutUpRight,
  MessageSquareText,
  School,
  SquareMousePointer,
  UserRoundPen,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function SmallChatModel() {
  const [currentTab, setCurrentTab] = useState('chat')

  function ChatModule() {
    setCurrentTab('chat')
  }

  function CollegeRecModule() {
    setCurrentTab('college')
  }

  function UserProfModule() {
    setCurrentTab('profile')
  }

  function RetriveChats() {
    setCurrentTab('retrive')
  }

  const tabLinks = {
    chat: '/chat',
    college: '/colleges',
    profile: '/profile',
    retrive: '/retrieve-chats',
  }

  return (
    <div className='flex h-[90vh] w-[93vw] rounded-2xl md:h-[70vh] md:w-[100%]'>
      <div className='w-[87%] md:w-[90%]'>
        {currentTab === 'chat' && <ChatSectionComponent />}
        {currentTab === 'college' && <SmallCollegeRecom />}
        {currentTab === 'profile' && <SmallUserProfile />}
        {currentTab === 'retrive' && <SmallRetriveChat />}
      </div>
      <div className='flex w-[13%] flex-col items-center space-y-3 rounded-r-2xl bg-gray-100 px-2 pt-12 md:w-[10%]'>
        <button
          onClick={ChatModule}
          className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'chat' ? 'text-purple-500' : ''}`}
        >
          <MessageSquareText strokeWidth={3} />
        </button>
        <button
          onClick={CollegeRecModule}
          className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'college' ? 'text-purple-500' : ''}`}
        >
          <School strokeWidth={2} />
        </button>
        <button
          onClick={UserProfModule}
          className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'profile' ? 'text-purple-500' : ''}`}
        >
          <UserRoundPen strokeWidth={3} />
        </button>
        <button
          onClick={RetriveChats}
          className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'retrive' ? 'text-purple-500' : ''}`}
        >
          <SquareMousePointer strokeWidth={3} />
        </button>
        <Link
          href={tabLinks[currentTab]}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start'
        >
          <CircleArrowOutUpRight strokeWidth={3} />
        </Link>
        <button>
          <Image
            className='hover:scale-105 hover:cursor-pointer'
            src='/WhatsAppIcon.png'
            width={45}
            height={45}
            alt='WhatsApp Icon'
          />
        </button>
      </div>
    </div>
  )
}

export default SmallChatModel
