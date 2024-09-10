'use client'

import {
  ChatSectionComponent,
  SmallCollegeRecom,
  SmallUserProfile,
} from '@/components'
import { MessageSquareText, School, UserRoundPen } from 'lucide-react'
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

  return (
    <div className='flex h-[90vh] w-[93vw] rounded-2xl md:h-[70vh] md:w-[100%]'>
      <div className='w-[87%] md:w-[90%]'>
        {currentTab === 'chat' && <ChatSectionComponent />}
        {currentTab === 'college' && <SmallCollegeRecom />}
        {currentTab === 'profile' && <SmallUserProfile />}
      </div>
      <div className='flex w-[13%] flex-col items-center space-y-3 rounded-r-2xl bg-gray-100 px-2 pt-12 md:w-[10%]'>
        <button
          onClick={ChatModule}
          className={`flex items-center justify-center gap-4 rounded-md py-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'chat' ? 'text-purple-500' : ''}`}
        >
          <MessageSquareText strokeWidth={3} />
        </button>
        <button
          onClick={CollegeRecModule}
          className={`flex items-center justify-center gap-4 rounded-md py-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'college' ? 'text-purple-500' : ''}`}
        >
          <School strokeWidth={2} />
        </button>
        <button
          onClick={UserProfModule}
          className={`flex items-center justify-center gap-4 rounded-md py-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'profile' ? 'text-purple-500' : ''}`}
        >
          <UserRoundPen strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}

export default SmallChatModel
