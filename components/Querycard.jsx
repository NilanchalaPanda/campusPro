const Querycard = ({ query, response }) => {
  return (
    <div className='flex h-[400px] flex-col rounded-lg border-2 border-blue-600 bg-blue-300/50 px-8 py-6 shadow-lg'>
      <div className='mb-4 flex-grow'>
        <h2 className='text-sm font-semibold leading-tight text-gray-800 md:text-xl'>
          {query}
        </h2>
      </div>
      <div className='flex-grow overflow-y-auto'>
        <p className='text-base font-medium leading-relaxed text-gray-800 md:text-md'>
          {response}
        </p>
      </div>
    </div>
  )
}

export default Querycard
