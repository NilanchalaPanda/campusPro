'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import SingleCollegeTab from '../../../components/SingleCollegeTab'

function Colleges() {
  const [collegeList, setCollegeList] = useState([])

  return (
    <div className='h-full w-full overflow-hidden overflow-y-auto pt-20 text-xl md:pt-20 md:text-4xl'>
      <h1 className='flex items-center justify-center text-center text-3xl font-bold md:text-5xl'>
        COLLEGE RECOMMENDATIONS
      </h1>

      {collegeList.length > 0 ? (
        <div className='mt-4 flex h-[85%] flex-col items-center justify-start space-y-4 overflow-y-auto rounded-xl px-4 md:mt-2 md:space-y-2 md:px-2'>
          {/* ACTUAL CODE TO BE USED */}
          {collegeList.map((item) => (
            <SingleCollegeTab key={item.collegeName} item={item}  />
          ))}

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
        <div className='flex h-[90%] flex-col items-center justify-center px-4 md:px-0'>
          <Image
            src='/colleges.svg'
            width={300}
            height={300}
            alt='Recommended Colleges'
            className='w-3/4 md:w-1/2'
          />
          <p className='px-2 text-center text-lg font-medium md:text-xl'>
            Oops! You have not yet added your{' '}
            <span className='font-bold text-blue-600'>
              COLLEGE PREFERENCES
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default Colleges
