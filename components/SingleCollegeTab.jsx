import React from 'react'

function SingleCollegeTab({ College, Description }) {
  return (
    <div className='rounded-xl bg-gray-100 p-2 shadow-sm'>
      <h1 className='text-lg font-bold'>
        {College}
      </h1>
      <p className='mt-2 text-sm font-bold text-gray-500'>
        {Description}
      </p>
    </div>
  )
}

export default SingleCollegeTab
