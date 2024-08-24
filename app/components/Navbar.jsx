function Navbar() {
  return (
    <div className='flex w-full items-center justify-between bg-violet-500 px-14 py-5 text-[#f7f7f7]'>
      {/* LOGO */}
      <p className='text-2xl font-bold'>CAMPUSPRO</p>

      {/* LINKS */}
      <div className='hidden md:block'>
        <ul className='flex items-center justify-center gap-x-10 font-semibold'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>FEATURES</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
