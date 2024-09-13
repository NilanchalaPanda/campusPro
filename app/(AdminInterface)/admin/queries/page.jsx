import Querycard from '@/components/Querycard'
import React from 'react'

function Queries() {
  return (
    <div className='h-full w-full'>
      <div className='grid grid-cols-3 items-center gap-8 p-8'>
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
        <Querycard query={'How to get into IIT Delhi?'} response={'hello'} />
      </div>
    </div>
  )
}

export default Queries
