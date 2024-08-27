import React from 'react'

function AdsComponent() {
  return (
    <div className='flex items-center justify-center h-full bg-gray-50 border-l border-gray-200'>
      <div className='p-4 text-center'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>Sponsored</h2>
        <p className='text-gray-600 mb-4'>Check out our latest offers and promotions!</p>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default AdsComponent
