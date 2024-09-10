'use client'

import React from 'react'
import { Menu, X, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const MenuIcon = ({ isOpen }) => {
  return isOpen ? (
    <X className='h-7 w-7 text-white' />
  ) : (
    <Menu className='h-7 w-7 text-white' />
  )
}

const DownloadIcon = () => <Download className='mr-2 h-5 w-5 text-gray-800' />

function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const anchorStyles =
    'text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-80 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'

  return (
    <div className='relative w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300'>
      <section className='relative lg:pb-36 lg:pt-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center xl:grid-cols-5'>
            <div className='text-center md:px-16 lg:px-0 lg:text-left xl:col-span-2'>
              <div className='mx-auto max-w-sm sm:max-w-md md:max-w-full'>
                <h1 className='font-pj text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight'>
                  Empowering Education Through Technology
                </h1>
                <p className='mt-4 text-lg text-gray-700'>
                  Discover innovative solutions and tools to enhance your
                  learning journey. Join our platform to unlock your full
                  potential!
                </p>
              </div>

              <div className='mt-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 lg:mt-12 lg:justify-start'>
                <Link
                  href='#learnmore'
                  className='font-pj inline-flex items-center rounded-xl border border-transparent bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  role='button'
                  passHref
                >
                  Learn More
                </Link>

                <Link
                  href='#getstarted'
                  className='font-pj mt-4 inline-flex items-center justify-center rounded-xl border border-transparent bg-transparent px-4 py-4 text-lg font-bold text-gray-900 transition-all duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 sm:mt-0'
                  role='button'
                  passHref
                >
                  <DownloadIcon />
                  Get Started
                </Link>
              </div>
            </div>

            <div className='mx-auto w-[80%] scale-110 lg:col-span-3 xl:col-span-3'>
              <Image
                className='h-auto w-full rounded-sm'
                src='/HeroImage.svg'
                alt='Illustration'
                layout='responsive'
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
