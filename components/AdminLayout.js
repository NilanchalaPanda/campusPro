'use client'

import {
  MessageSquareText,
  School,
  SquareMousePointer,
  UserRoundPen,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AdminLayout({ children }) {
  const path = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-300/50 p-4 transition-transform lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          className='absolute right-4 top-4 z-50 text-white lg:hidden'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
        <h2 className='mb-4 flex items-center justify-center border-4 border-b-black text-center text-xl font-bold'>
          <Image
            src='/Stateemblem.png'
            width={40}
            height={70}
            alt='State Logo  '
          />
          Government of Technical Education
        </h2>
        <nav>
          <ul>
            <li className='mb-2'>
              <Link
                href='/admin/analytics'
                className={`flex items-center gap-x-3 rounded-xl px-4 py-3 pl-5 font-medium ${path === '/admin/analytics' ? 'bg-gray-100 font-semibold text-gray-900' : ''}`}
              >
                <MessageSquareText
                  className={`${path === '/admin/analytics' ? 'text-blue-700' : ''}`}
                  strokeWidth={2}
                />
                <span className='hidden lg:block'>Analytics</span>
              </Link>
            </li>
            <li className='mb-2'>
              <Link
                href='/admin/queries'
                className={`flex items-center gap-x-3 rounded-xl px-4 py-3 pl-5 font-medium ${path === '/admin/queries' ? 'bg-gray-100 font-semibold text-gray-900' : ''}`}
              >
                <School
                  strokeWidth={2}
                  className={`${path === '/admin/queries' ? 'text-blue-700' : ''}`}
                />
                <span className='hidden lg:block'>Critical Queries</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for sidebar in mobile */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black opacity-50 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className='h-[100vh] flex-1 overflow-x-auto px-0 md:px-20'>
        {children}
      </main>

      {/* Sidebar toggle button for mobile */}
      {!isSidebarOpen && (
        <button
          className='fixed left-4 top-4 z-50 rounded-md bg-gray-800 p-2 text-white lg:hidden'
          onClick={() => setIsSidebarOpen(true)}
        >
          Open
        </button>
      )}
    </div>
  )
}
