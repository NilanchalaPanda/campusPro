import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex w-full items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-14 py-5 shadow-xl shadow-gray-300'>
      {/* LOGO */}
      <p className='text-3xl font-bold text-white hover:text-yellow-300 transition-all duration-300 ease-in-out cursor-pointer'>
        CAMPUSPRO
      </p>

      {/* LINKS */}
      <div className='hidden md:block'>
        <ul className='flex items-center justify-center gap-x-5 font-semibold'>
          <li className='text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out cursor-pointer'>
            About
          </li>
          <li className='text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out cursor-pointer'>
            Features
          </li>
          <li className='rounded-lg bg-slate-300 px-3 py-2 shadow-lg hover:cursor-pointer hover:bg-slate-400 transition-all duration-300 ease-in-out'>
            <Link href='/login'>Login</Link>
          </li>
          <li className='rounded-lg bg-violet-600 px-3 py-2 text-white shadow-lg hover:cursor-pointer hover:bg-violet-700 transition-all duration-300 ease-in-out'>
            <Link href='/signup'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
