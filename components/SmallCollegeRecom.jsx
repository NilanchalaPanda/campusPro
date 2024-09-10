'use client'

import Image from 'next/image'
import React, { useState } from 'react'

function SmallCollegeRecom() {
  const [collegeList, setCollegeList] = useState([])

  return (
    <div className='rounded-l-2xl h-full bg-white py-2 text-center md:p-3'>
      <h1 className='mt-5 text-2xl font-bold'>COLLEGE RECOMMENDATIONS</h1>
      <div className='flex h-full flex-col items-center justify-center'>
        {collegeList.length > 0 ? (
          <></>
        ) : (
          <>
            <Image
              src='/colleges.svg'
              width={200}
              height={200}
              alt='Recommended Colleges'
            />
            <p className='px-4 text-xl font-medium'>
              Oops! You have not yet added your{' '}
              <span className='font-bold text-purple-600'>
                COLLEGE PREFERRENCES
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default SmallCollegeRecom
