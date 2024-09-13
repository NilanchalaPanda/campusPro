const Querycard = ({ query, response }) => {
  return (
    <div className='rounded-lg border-2 border-orange-600 bg-orange-300/50 px-8 py-6  shadow-lg'>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold leading-tight tracking-wide text-gray-800 md:text-3xl'>
          {query}
        </h2>
      </div>
      <div className='scrollbar h-[10vh] overflow-x-auto'>
        <p className='text-base font-medium leading-relaxed text-gray-800 md:text-lg'>
          {response}
        </p>
      </div>
    </div>
  )
}

export default Querycard
