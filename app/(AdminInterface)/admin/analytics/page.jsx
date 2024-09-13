'use client'

import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Graphs from '@/components/Graphs'
import React from 'react'

const data = [
  { name: 'Maharastra', pv: 8, amt: 8 },
  { name: 'Rajasthan', pv: 10, amt: 10 },
  { name: 'Punjab', pv: 6, amt: 6 },
  { name: 'Gujrat', pv: 4, amt: 4 },
  { name: 'Andhra Pradesh', pv: 9, amt: 9 },
]

const tableData = [
  { name: 'Shreyash', state: 'Maharashtra', queries: 10, resolved: 100 },
  { name: 'Nilanchal', state: 'Rajasthan', queries: 15, resolved: 100 },
  { name: 'Shreya', state: 'Punjab', queries: 5, resolved: 100 },
  { name: 'Usmaan', state: 'Gujarat', queries: 7, resolved: 100 },
  { name: 'Atharva', state: 'Andhra Pradesh', queries: 8, resolved: 100 },
  { name: 'Himanshu', state: 'Karnataka', queries: 9, resolved: 100 },
]

function Analytics() {
  const [userCount, setUserCount] = useState(500)

  useEffect(() => {
    const fetchUsercount = async () => {
      try {
        const response = await fetch('api/admin/usercount')
        const data = await response.json()
        setUserCount(data.userCount)
      } catch {
        console.error('Failed to fetch the number of users and the query count')
      }
    }

    fetchUsercount()
  }, [])

  return (
    <div className='space-y-8 p-8'>
      <h1 className="font-bold text-4xl text-gray-900 px-4 py-4">Analytics </h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card subheading='No. of Users' count={userCount} />
        <Card subheading='No. of Queries' count={24} />
        <Card subheading='No. of Critical Requests' count={45} />
        <Card subheading='Trending Topic' count={69} />
      </div>

      <div className='h-[55vh] pt-10'>
        <Graphs data={data} />
      </div>

      <div className='pt-6'>
        <div className='overflow-x-auto rounded-lg border border-gray-200 shadow-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                  Name
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                  State
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                  No. of Queries
                </th>
                <th className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500'>
                  Resolved Queries %
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                    {row.name}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                    {row.state}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                    {row.queries}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
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
