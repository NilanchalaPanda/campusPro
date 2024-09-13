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
          <X strokeWidth={2} className='text-3xl font-bold text-black' />
        </button>
        <div className='text-gray-800'>
          <nav>
            <ul>
              <li className='mb-2'>
                <Link
                  onClick={() => setIsSidebarOpen(false)}
                  href='/chat'
                  className={`flex items-center gap-x-3 rounded-xl px-4 py-2 font-semibold ${path === '/chat' ? 'bg-gray-200 text-gray-700' : 'text-gray-800'}`}
                >
                  <MessageSquareText
                    className={`${path === '/chat' ? 'text-purple-500' : ''}`}
                    strokeWidth={3}
                  />
                  <span>Chat</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  onClick={() => setIsSidebarOpen(false)}
                  href='/colleges'
                  className={`flex items-center gap-x-3 rounded-xl px-4 py-2 font-semibold ${path === '/colleges' ? 'bg-gray-200 text-gray-700' : 'text-gray-800'}`}
                >
                  <School
                    className={`${path === '/colleges' ? 'text-purple-500' : ''}`}
                    strokeWidth={3}
                  />
                  <span>Colleges</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  onClick={() => setIsSidebarOpen(false)}
                  href='/profile'
                  className={`flex items-center gap-x-3 rounded-xl px-4 py-2 font-semibold ${path === '/profile' ? 'bg-gray-200 text-gray-700' : 'text-gray-800'}`}
                >
                  <UserRoundPen
                    className={`${path === '/profile' ? 'text-purple-500' : ''}`}
                    strokeWidth={3}
                  />
                  <span>Profile</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link
                  onClick={() => setIsSidebarOpen(false)}
                  href='/retrieve-chats'
                  className={`flex items-center gap-x-3 rounded-xl px-4 py-2 font-semibold ${path === '/retrieve-chats' ? 'bg-gray-200 text-gray-700' : 'text-gray-800'}`}
                >
                  <SquareMousePointer
                    className={`${path === '/retrieve-chats' ? 'text-purple-500' : ''}`}
                    strokeWidth={3}
                  />
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
          className='fixed z-50 w-full bg-gray-200 p-2 lg:hidden'
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu strokeWidth={2} />
        </button>
      )}
    </div>
  )
}
