// 'use client'

// import {
//   ChatSectionComponent,
//   SmallCollegeRecom,
//   SmallRetriveChat,
//   SmallUserProfile,
// } from '@/components'
// import {
//   CircleArrowOutUpRight,
//   MessageSquareText,
//   School,
//   SquareMousePointer,
//   UserRoundPen,
// } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'

// function SmallChatModel() {
//   const [currentTab, setCurrentTab] = useState('chat')

//   function ChatModule() {
//     setCurrentTab('chat')
//   }

//   function CollegeRecModule() {
//     setCurrentTab('college')
//   }

//   function UserProfModule() {
//     setCurrentTab('profile')
//   }

//   function RetriveChats() {
//     setCurrentTab('retrive')
//   }

//   const tabLinks = {
//     chat: '/chat',
//     college: '/colleges',
//     profile: '/profile',
//     retrive: '/retrieve-chats',
//   }

//   return (
//     <div className='flex h-[90vh] w-[93vw] rounded-2xl md:h-[70vh] md:w-[100%]'>
//       <div className='w-[87%] md:w-[90%]'>
//         {currentTab === 'chat' && <ChatSectionComponent />}
//         {currentTab === 'college' && <SmallCollegeRecom />}
//         {currentTab === 'profile' && <SmallUserProfile />}
//         {currentTab === 'retrive' && <SmallRetriveChat />}
//       </div>
//       <div className='flex w-[13%] flex-col items-center space-y-3 rounded-r-2xl bg-gray-100 px-2 pt-12 md:w-[10%]'>
//         <button
//           onClick={ChatModule}
//           className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'chat' ? 'text-blue-500' : ''}`}
//         >
//           <MessageSquareText strokeWidth={3} />
//         </button>
//         <button
//           onClick={CollegeRecModule}
//           className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'college' ? 'text-blue-500' : ''}`}
//         >
//           <School strokeWidth={2} />
//         </button>
//         <button
//           onClick={UserProfModule}
//           className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'profile' ? 'text-blue-500' : ''}`}
//         >
//           <UserRoundPen strokeWidth={3} />
//         </button>
//         <button
//           onClick={RetriveChats}
//           className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'retrive' ? 'text-blue-500' : ''}`}
//         >
//           <SquareMousePointer strokeWidth={3} />
//         </button>
//         <Link
//           href={tabLinks[currentTab]}
//           target='_blank'
//           rel='noopener noreferrer'
//           className='flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start'
//         >
//           <CircleArrowOutUpRight strokeWidth={3} />
//         </Link>
//         <Link
//           target='_blank'
//           href='https://wa.me/+14155238886?text=Hello, can you help me to guide through colleges admission process in Engineering.'
//         >
//           <Image
//             className='hover:scale-105 hover:cursor-pointer'
//             src='/WhatsAppIcon.png'
//             width={45}
//             height={45}
//             alt='WhatsApp Icon'
//           />
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default SmallChatModel

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
  X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function SmallChatModel({ toggleModal }) {
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
      <div className='relative flex w-[13%] flex-col items-center space-y-3 rounded-r-2xl bg-gray-100 px-2 pt-3 md:w-[10%]'>
        {/* Close Button */}
        <button onClick={toggleModal} className='hover:scale-110'>
          <X strokeWidth={3} />
        </button>

        <div className='group relative'>
          <button
            onClick={ChatModule}
            className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'chat' ? 'text-blue-500' : ''}`}
          >
            <MessageSquareText strokeWidth={3} />
          </button>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            Chat
          </div>
        </div>

        <div className='group relative'>
          <button
            onClick={CollegeRecModule}
            className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'college' ? 'text-blue-500' : ''}`}
          >
            <School strokeWidth={2} />
          </button>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            Colleges
          </div>
        </div>

        <div className='group relative'>
          <button
            onClick={UserProfModule}
            className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'profile' ? 'text-blue-500' : ''}`}
          >
            <UserRoundPen strokeWidth={3} />
          </button>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            Preferences
          </div>
        </div>

        <div className='group relative'>
          <button
            onClick={RetriveChats}
            className={`flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start ${currentTab === 'retrive' ? 'text-blue-500' : ''}`}
          >
            <SquareMousePointer strokeWidth={3} />
          </button>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            Retrieve
          </div>
        </div>

        <div className='group relative'>
          <Link
            href={tabLinks[currentTab]}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-4 rounded-md p-2 hover:scale-95 hover:rounded-xl hover:bg-white md:px-2 lg:justify-start'
          >
            <CircleArrowOutUpRight strokeWidth={3} />
          </Link>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            Fullscreen
          </div>
        </div>

        <div className='group relative'>
          <Link
            target='_blank'
            href='https://wa.me/+14155238886?text=Hello, can you help me to guide through colleges admission process in Engineering.'
          >
            <Image
              className='hover:scale-105 hover:cursor-pointer'
              src='/WhatsAppIcon.png'
              width={45}
              height={45}
              alt='WhatsApp Icon'
            />
          </Link>
          <div className='text-md absolute right-12 top-0 hidden rounded-md bg-gray-900/80 px-2 py-1 text-white group-hover:block'>
            WhatsApp
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallChatModel

// 'use client'

// import { useState } from 'react'
// import {
//   ChatSectionComponent,
//   SmallCollegeRecom,
//   SmallRetriveChat,
//   SmallUserProfile,
// } from '@/components'
// import { MessageSquareText, School, UserRoundPen, X } from 'lucide-react'

// function SmallChatModel({ toggleModal }) {
//   const [currentTab, setCurrentTab] = useState('chat')

//   function ChatModule() {
//     setCurrentTab('chat')
//   }

//   function CollegeRecModule() {
//     setCurrentTab('college')
//   }

//   function UserProfModule() {
//     setCurrentTab('profile')
//   }

//   function RetriveChats() {
//     setCurrentTab('retrive')
//   }

//   return (
//     <div className='flex h-[90vh] w-[93vw] rounded-2xl md:h-[70vh] md:w-[100%]'>
//       {/* Main Chat Section */}
//       <div className='w-[87%] md:w-[90%]'>
//         {currentTab === 'chat' && <ChatSectionComponent />}
//         {currentTab === 'college' && <SmallCollegeRecom />}
//         {currentTab === 'profile' && <SmallUserProfile />}
//         {currentTab === 'retrive' && <SmallRetriveChat />}
//       </div>

//       {/* Sidebar */}
//       <div className='relative flex w-[13%] flex-col items-center space-y-3 rounded-r-2xl bg-gray-100 px-2 pt-12 md:w-[10%]'>
//         {/* Close Button */}
//         <button
//           onClick={toggleModal}
//           className='hover:scale-110'
//         >
//           <X strokeWidth={3} />
//         </button>

//         {/* Chat Button */}
//         <button
//           onClick={ChatModule}
//           className={`p-2 ${currentTab === 'chat' ? 'text-blue-500' : ''}`}
//         >
//           <MessageSquareText strokeWidth={3} />
//         </button>

//         {/* College Button */}
//         <button
//           onClick={CollegeRecModule}
//           className={`p-2 ${currentTab === 'college' ? 'text-blue-500' : ''}`}
//         >
//           <School strokeWidth={2} />
//         </button>

//         {/* Profile Button */}
//         <button
//           onClick={UserProfModule}
//           className={`p-2 ${currentTab === 'profile' ? 'text-blue-500' : ''}`}
//         >
//           <UserRoundPen strokeWidth={3} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default SmallChatModel
