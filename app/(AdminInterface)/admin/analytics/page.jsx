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
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card subheading='No. of Users' count={userCount} />
        <Card subheading='No. of Queries' count={24} />
        <Card subheading='No. of Critical Requests' count={45} />
        <Card subheading='Trending Topic' count={69} />
      </div>

      <div className='h-[55vh] pt-10' >
        <Graphs
          data={data}
        />
      </div>

      <div className="pt-6">
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Column 1</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Column 2</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Column 3</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Column 4</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Column 5</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(6).keys()].map((index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Data {index + 1}-1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data {index + 1}-2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data {index + 1}-3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data {index + 1}-4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data {index + 1}-5</td>
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
