import Link from 'next/link'
import React from 'react'

function Admin() {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-4 px-2 text-center md:px-10'>
      <div className='text-4xl font-bold'>
        This will not be the admin page. The primary tab when admin lands into{' '}
        <br />
        the website will be <strong>/admin/analytics</strong>. So go to...
      </div>
      <Link
        href='/admin/analytics'
        className='text-2xl font-bold text-blue-500 hover:cursor-pointer'
      >
        NEW ADMIN
      </Link>
      <Link
        href='/admin/queries'
        className='text-2xl font-bold text-blue-500 hover:cursor-pointer'
      >
        QUERIES
      </Link>
      <p className='text-xl font-medium'>
        Also add a sideBar with the same tab names as mentioned in above routes
      </p>
    </div>
  )
}

export default Admin
