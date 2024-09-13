'use client'
import React, { useState } from 'react'

function SmallRetrieveChat() {
  const [showMessage, setShowMessage] = useState(false)

  const handleRetrieveChats = () => {
    // Simulate the action of retrieving chats and show the message
    setShowMessage(true)
  }

  return (
    <div className='h-full rounded-l-2xl bg-white py-2 text-center md:p-3'>
      <h1 className='mt-5 text-2xl font-bold'>RETRIEVE CHATS</h1>
      <p className='text-md mt-2 px-2 font-bold text-gray-500'>
        Enter your phone number below to recover all your previous chats, even
        if they have been deleted.
      </p>
      <div>
        <input
          type='tel'
          placeholder='Enter your phone number'
          className='mt-4 w-3/4 rounded-lg border border-gray-300 p-2'
        />
        <button
          className='mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          onClick={handleRetrieveChats}
        >
          Retrieve Chats
        </button>
      </div>
      {showMessage && (
        <p className='text-md mt-4 text-green-500'>Chats are already present.</p>
      )}
    </div>
  )
}

export default SmallRetrieveChat
