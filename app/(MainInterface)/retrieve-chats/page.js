import React from 'react';

function RetrieveChats() {
  return (
    <div className='h-full w-full p-4 md:p-8'>
      <h1 className='text-3xl pt-14 md:text-4xl font-bold text-center mb-4 md:mb-8'>Retrieve Chats</h1>
      <p className='text-lg md:text-2xl font-bold text-gray-500 text-center mb-8'>
        Enter your phone number below to recover all your previous chats, even if they have been deleted.
      </p>
      <div className='flex flex-col items-center'>
        <input
          type='tel'
          placeholder='Enter your phone number'
          className='w-full max-w-md rounded-lg border border-gray-300 p-3 text-base mb-4'
        />
        <button className=' max-w-md rounded-lg bg-purple-500 px-4 py-3 text-white text-base hover:bg-purple-600'>
          Retrieve Chats
        </button>
      </div>
    </div>
  );
}

export default RetrieveChats
