'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import SingleCollegeTab from './SingleCollegeTab'

function SmallCollegeRecom() {
  const [collegeList, setCollegeList] = useState([])

  return (
    <div className='h-full rounded-l-2xl bg-white py-2 md:p-3'>
      <h1 className='flex h-[12%] items-center justify-center text-center text-2xl font-bold'>
        COLLEGE RECOMMENDATIONS
      </h1>

      {collegeList.length > 0 ? (
        <div className='mt-2 flex h-[85%] flex-col items-center justify-start space-y-2 overflow-y-auto rounded-xl px-2 md:px-0'>
          {/* ACTUAL CODE TO BE USED */}
          {/* {collegeList.map((item) => (
            <SingleCollegeTab key={item.collegeName} item={item} />
          ))} */}

          {/* DUMMY CODE TO CHECK TILES OF COLLEGES */}
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
          <SingleCollegeTab />
        </div>
      ) : (
        // Center content when no college recommendations are present
        <div className='flex h-[85%] flex-col items-center justify-center'>
          <Image
            src='/colleges.svg'
            width={200}
            height={200}
            alt='Recommended Colleges'
          />
          <p className='px-4 text-center text-xl font-medium'>
            Oops! You have not yet added your{' '}
            <span className='font-bold text-purple-600'>
              COLLEGE PREFERENCES
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default SmallCollegeRecom
