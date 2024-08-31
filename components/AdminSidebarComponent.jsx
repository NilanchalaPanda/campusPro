import { User2Icon } from 'lucide-react'
import { FileQuestion } from 'lucide-react'
import { GitGraph } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'

const AdminSidebarComponent = () => {
  return (
    <div className='mt-4 flex h-[95%] flex-col justify-between text-sm'>
      <div>
        <Link
          href='/analytics'
          key='Chat'
          className='hover:bg-lamaSkyLight flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 md:px-2 lg:justify-start'
        >
          <GitGraph />
          <span className='hidden lg:block'>Analytics</span>
        </Link>
        <Link
          href='/queries'
          key='Colleges'
          className='hover:bg-lamaSkyLight flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 md:px-2 lg:justify-start'
        >
          <FileQuestion />
          <span className='hidden lg:block'>Queries</span>
        </Link>
      </div>
      <div>
        <Link
          href='/profile'
          className='hover:bg-lamaSkyLight flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 md:px-2 lg:justify-start'
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

export default AdminSidebarComponent
