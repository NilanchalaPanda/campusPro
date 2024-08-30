import { Inter } from 'next/font/google';
import '../../globals.css';
import Link from 'next/link';
import Card from '@/app/components/Card';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard with metrics and navigation',
};

export default function AdminPage({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex h-screen'>
          {/* Sidebar */}
          <div className='w-[14%] p-4 border-r-2 border-black md:w-[8%] lg:w-[16%] xl:w-[14%]'>
            <Link href='/' className='flex items-center justify-center gap-2 lg:justify-start'>
              LO
              <span className='hidden font-bold lg:block'>CampusPro</span>
            </Link>
            {/* Admin Sidebar Links or Components */}
            <div className='mt-6'>
              {/* Example sidebar links */}
              <Link href='/admin/dashboard' className='block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded'>Dashboard</Link>
              <Link href='/admin/users' className='block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded'>Users</Link>
              <Link href='/admin/settings' className='block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded'>Settings</Link>
            </div>
          </div>
          {/* Main Content */}
          <main className='h-[100vh] w-[90vw] overflow-x-auto hide-scrollbar'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
