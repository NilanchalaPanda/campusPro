'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import SingleCollegeTab from './SingleCollegeTab'

function SmallCollegeRecom() {
  const [isLoading, setIsLoading] = useState(false)
  const [collegeList, setCollegeList] = useState(null)

  useEffect(() => {
    const savedCollegeList = localStorage.getItem('PageLoaded')

    if (savedCollegeList) {
      setIsLoading(true) // Show loader only if the collegeList exists
      setTimeout(() => {
        setCollegeList(savedCollegeList)
        setIsLoading(false) // Hide loader after 3 seconds
      }, 3000) // 3 seconds loading time
    }
  }, [])

  return (
    <div className='h-full rounded-l-2xl bg-white py-2 md:p-3'>
      <h1 className='flex h-[12%] items-center justify-center text-center text-2xl font-bold'>
        COLLEGE RECOMMENDATIONS
      </h1>

      {isLoading ? (
        <div className='flex h-[85%] items-center justify-center'>
          <div className='flex items-center space-x-2'>
            <div className='h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent'></div>
            <p className='text-xl font-medium'>Loading...</p>
          </div>
        </div>
      ) : collegeList ? (
        <div className='mt-2 flex h-[85%] flex-col items-center justify-start space-y-2 overflow-y-auto rounded-xl px-2 md:px-0'>
          <SingleCollegeTab
            College={'Veermata Jijabai Technological Institute (VJTI)'}
            Description={
              'One of the oldest engineering colleges in Mumbai, known for its strong technical programs and industry connections.'
            }
          />
          <SingleCollegeTab
            College={'Sardar Patel Institute of Technology (SPIT)'}
            Description={
              'Highly regarded for its quality of education in engineering and management, located in Andheri, Mumbai.'
            }
          />
          <SingleCollegeTab
            College={'Dwarkadas J. Sanghvi College of Engineering (DJSCE)'}
            Description={
              'Offers a range of undergraduate and postgraduate courses, known for its well-rounded curriculum and campus.'
            }
          />
          <SingleCollegeTab
            College={'KJ Somaiya College of Engineering (KJSCE)'}
            Description={
              'Part of the Somaiya Vidyavihar University, known for a vibrant campus life and diverse technical programs.'
            }
          />
          <SingleCollegeTab
            College={'Thadomal Shahani Engineering College (TSEC)'}
            Description={
              'Located in Bandra, it is well-known for its student activities and quality technical education.'
            }
          />
          <SingleCollegeTab
            College={'Fr. Conceicao Rodrigues College of Engineering (FRCRCE)'}
            Description={
              'Popular for its focus on research and development along with engineering studies, located in Bandra, Mumbai.'
            }
          />
        </div>
      ) : (
        <div className='flex h-[85%] flex-col items-center justify-center'>
          <Image
            src='/colleges.svg'
            width={200}
            height={200}
            alt='Recommended Colleges'
          />
          <p className='px-4 text-center text-xl font-medium'>
            Oops! You have not yet added your{' '}
            <span className='font-bold text-blue-600'>COLLEGE PREFERENCES</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default SmallCollegeRecom
