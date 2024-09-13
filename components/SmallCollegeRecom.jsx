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

      {collegeList.length === 0 ? (
        <div className='mt-2 flex h-[85%] flex-col items-center justify-start space-y-2 overflow-y-auto rounded-xl px-2 md:px-0'>
          {/* Real Engineering Colleges in Mumbai */}
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
