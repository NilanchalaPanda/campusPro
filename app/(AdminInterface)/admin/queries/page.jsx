import Querycard from '@/components/Querycard'
import React from 'react'

function Queries() {
  return (
    <div className='mb-10 w-full'>
      <h1 className='px-4 py-4 text-start text-3xl font-bold text-gray-900'>
        Unresolved Queries
      </h1>
      <div className='grid grid-cols-3 items-center gap-8'>
        <Querycard
          query={
            'What are the specific admission requirements for a unique course at a lesser-known college in Rajasthan?'
          }
          response={
            'Unfortunately, I cannot provide detailed information on unique course requirements for lesser-known colleges in Rajasthan. Please refer to the college’s official website or contact their admissions office for accurate details.'
          }
        />
        <Querycard
          query={
            'Can you provide historical placement data for a particular branch at a private college in Rajasthan for the past 10 years?'
          }
          response={
            'I am unable to access historical placement data for specific branches at private colleges in Rajasthan. For accurate placement statistics, please contact the college’s placement cell directly.'
          }
        />
        <Querycard
          query={
            'What are the recent changes in scholarship policies at a niche college in Rajasthan that’s not widely recognized?'
          }
          response={
            'I don’t have information on recent changes in scholarship policies for niche colleges in Rajasthan. For the most up-to-date information, please visit the college’s official website or contact their financial aid office.'
          }
        />
        <Querycard
          query={
            'What are the specific facilities and amenities provided by a new college in Rajasthan that has just started this academic year?'
          }
          response={
            'As an AI, I don’t have access to detailed information about the facilities and amenities of newly established colleges in Rajasthan. For comprehensive details, check the college’s website or contact their administrative office.'
          }
        />
      </div>
    </div>
  )
}

export default Queries
