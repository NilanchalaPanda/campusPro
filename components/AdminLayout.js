'use client'

import {
  MessageSquareText,
  School,
  SquareMousePointer,
  UserRoundPen,
} from 'lucide-react'
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
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 p-4 text-white transition-transform lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          className='absolute right-4 top-4 z-50 text-white lg:hidden'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
        <h2 className='mb-4 text-xl font-bold'>Admin</h2>
        <nav>
          <ul>
            <li className='mb-2'>
              <Link
                href='/admin/analytics'
                className={`flex items-center gap-x-3 px-4 py-2 pl-5 ${path === '/chat' ? 'bg-gray-700' : ''}`}
              >
                <MessageSquareText strokeWidth={2} />
                <span className='hidden lg:block'>Analytics</span>
              </Link>
            </li>
            <li className='mb-2'>
              <Link
                href='/admin/queries'
                className={`flex items-center gap-x-3 px-4 py-2 pl-5 ${path === '/colleges' ? 'bg-gray-700' : ''}`}
              >
                <School strokeWidth={2} />
                <span className='hidden lg:block'>Queries</span>
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
      <main className='flex-1 px-0 md:px-20 overflow-x-auto h-[100vh]'>{children}</main>

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
