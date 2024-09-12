'use client'

import {
  MessageSquareText,
  School,
  SquareMousePointer,
  UserRoundPen,
  Menu,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function UserLayout({ children }) {
  const path = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#f3f4f6] p-4 text-white transition-transform lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          className='absolute right-4 top-4 z-50 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        >
         <X
  strokeWidth={2}
  className=' text-black font-bold text-3xl'
/>
        </button>
        <div className='text-gray-800'>
          <nav>
            <ul>
              <li className='mb-2'>
                <Link
                  href='/chat'
                  className={`flex items-center gap-x-3 px-4 py-2 ${path === '/chat' ? 'bg-gray-300 text-gray-800' : 'text-gray-800'}`}
                >
                  <MessageSquareText strokeWidth={2} />
                  <span>Chat</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/colleges'
                  className={`flex items-center gap-x-3 px-4 py-2 ${path === '/colleges' ? 'bg-gray-300 text-gray-800' : 'text-gray-800'}`}
                >
                  <School strokeWidth={2} />
                  <span>Colleges</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/profile'
                  className={`flex items-center gap-x-3 px-4 py-2 ${path === '/profile' ? 'bg-gray-300 text-gray-800' : 'text-gray-800'}`}
                >
                  <UserRoundPen strokeWidth={2} />
                  <span>Profile</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  href='/retrieve-chats'
                  className={`flex items-center gap-x-3 px-4 py-2 ${path === '/retrieve-chats' ? 'bg-gray-300 text-gray-800' : 'text-gray-800'}`}
                >
                  <SquareMousePointer strokeWidth={2} />
                  <span>Retrieve</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for sidebar in mobile */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black opacity-50 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className='flex-1 px-0 md:px-20'>{children}</main>

      {/* Sidebar toggle button for mobile */}
      {/* Sidebar toggle button for mobile */}
      {!isSidebarOpen && (
        <button
          className='fixed z-50  w-full  bg-gray-500 p-2 text-white lg:hidden'
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu strokeWidth={2} />
        </button>
      )}
    </div>
  )
}
