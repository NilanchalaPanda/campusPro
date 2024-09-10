import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex w-full items-center justify-between rounded-b-3xl px-14 py-5'>
      {/* LOGO */}
      <div className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='Logo for the website'
          width={30}
          height={40}
        />
        <p className='text-2xl font-bold'>CAMPUSPRO</p>
      </div>

      {/* LINKS */}
      <div className='hidden md:block'>
        <ul className='flex items-center justify-center gap-x-5 font-semibold'>
          <li>About</li>
          <li>Features</li>
          <li className='rounded-lg bg-slate-300 px-3 py-2 shadow-lg hover:cursor-pointer'>
            <Link href='/login'>Login</Link>
          </li>
          <li className='rounded-lg bg-violet-500 px-3 py-2 text-white shadow-lg hover:cursor-pointer'>
            <Link href='/signup'>SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
