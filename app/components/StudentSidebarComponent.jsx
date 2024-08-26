'use client'

import { School } from 'lucide-react'
import { User2Icon } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'
import { ChartAreaIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const StudentSidebarComponent = () => {
  const path = usePathname()
  console.log(path)
  return (
    <div className='mt-4 flex h-[95%] flex-col justify-between'>
      <div>
        <Link
          href='/chat'
          key='Chat'
          className={`flex items-center justify-center gap-4 rounded-md py-2 md:px-2 lg:justify-start ${path == '/chat' ? 'bg-purple-300' : ''}`}
        >
          <ChartAreaIcon />
          <span className='hidden lg:block'>Chat</span>
        </Link>
        <Link
          href='/colleges'
          key='Colleges'
          className={`flex items-center justify-center gap-4 rounded-md py-2 md:px-2 lg:justify-start ${path == '/colleges' ? 'bg-purple-300' : ''}`}
        >
          <School />
          <span className='hidden lg:block'>Colleges</span>
        </Link>
      </div>
      <div>
        <Link
          href='/profile'
          className={`flex items-center justify-center gap-4 rounded-md py-2 md:px-2 lg:justify-start ${path == '/profile' ? 'bg-purple-300' : ''}`}
        >
          <User2Icon />
          <span className='hidden lg:block'>Profile</span>
        </Link>

        <Link
          href='/logout'
          className='hover:bg-lamaSkyLight flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 md:px-2 lg:justify-start'
        >
          <LogOutIcon />
          <span className='hidden lg:block'>Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default StudentSidebarComponent
