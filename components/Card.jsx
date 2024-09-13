// components/Card.js
import React from 'react'

const Card = ({ subheading, count }) => {
  return (
    <div className='flex flex-col gap-x-5 rounded-lg border-2 border-blue-700 bg-blue-400/70 p-3 text-black shadow-lg'>
      <div className='text-xl font-medium'>{subheading}</div>
      <div className='text-3xl font-semibold'>{count}</div>
    </div>
  )
}

export default Card
