'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Graphs from '@/components/Graphs'
import React from 'react'

const data = [
  { name: 'Maharastra', Queries: 8, amt: 8 },
  { name: 'Rajasthan', Queries: 10, amt: 10 },
  { name: 'Punjab', Queries: 6, amt: 6 },
  { name: 'Gujrat', Queries: 4, amt: 4 },
  { name: 'Andhra Pradesh', Queries: 9, amt: 9 },
]

const tableData = [
  { name: 'Nilanchal', state: 'Maharasthra', queries: 4, resolved: 100 },
  { name: 'Shreyash', state: 'Maharashtra', queries: 10, resolved: 100 },
  { name: 'Shreya', state: 'Punjab', queries: 5, resolved: 100 },
  { name: 'Usmaan', state: 'Gujarat', queries: 7, resolved: 100 },
  { name: 'Atharva', state: 'Andhra Pradesh', queries: 8, resolved: 100 },
  { name: 'Himanshu', state: 'Karnataka', queries: 9, resolved: 100 },
]

function Analytics() {
  const [userCount, setUserCount] = useState(500)

  return (
    <div>
      <h1 className='px-4 pb-3 pt-4 text-3xl font-bold text-gray-900'>
        Analytics{' '}
      </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        <Card subheading='No. of Users' count={6} />
        <Card subheading='No. of Queries' count={44} />
        <Card subheading='No. of Critical Requests' count={4} />
        <Card subheading='Resolved Percentage' count={100} />
      </div>

      <div className='h-[55vh] w-[95%] pt-5'>
        <h1 className='px-4 pb-3 pt-4 text-3xl font-bold text-gray-900'>
          Query Statistics
        </h1>
        <Graphs data={data} />
      </div>

      <div className='mt-20 pb-10 pt-6'>
        <h1 className='px-4 pb-3 pt-4 text-3xl font-bold text-gray-900'>
          User Details
        </h1>
        <div className='overflow-x-auto rounded-lg border border-gray-200 shadow-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-md px-6 py-3 text-left font-bold uppercase tracking-wider text-blue-500'>
                  Name
                </th>
                <th className='text-md px-6 py-3 text-left font-bold uppercase tracking-wider text-blue-500'>
                  State
                </th>
                <th className='text-md px-6 py-3 text-left font-bold uppercase tracking-wider text-blue-500'>
                  No. of Queries
                </th>
                <th className='text-md px-6 py-3 text-left font-bold uppercase tracking-wider text-blue-500'>
                  Resolved Queries %
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900'>
                    {row.name}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500'>
                    {row.state}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500'>
                    {row.queries}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500'>
                    {row.resolved}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics
