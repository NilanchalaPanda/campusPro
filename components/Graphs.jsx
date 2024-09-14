'use client'

import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Pie,
} from 'recharts'

const Graphs = ({ data }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='h-[100%]'>
      {/* Bar and Pie Charts */}
      <div className='grid h-full grid-cols-1 gap-10 lg:grid-cols-10'>
        {/* Bar Chart */}
        <div className='h-full lg:col-span-7'>
          <ResponsiveContainer
            className='border p-4 shadow-2xl shadow-neutral-600/20'
            height='100%'
            width='100%'
          >
            <BarChart data={data}>
              <XAxis
                dataKey='name'
                stroke='#888888'
                fontSize={12}
                className='font-bold'
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                itemStyle={{ fontWeight: 400, color: '#000' }}
                contentStyle={{ backgroundColor: '#fff' }}
              />
              <Bar dataKey='Queries' fill='#1359A1' radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className='h-full lg:col-span-3'>
          <ResponsiveContainer
            className='flex items-center justify-center border p-4 shadow-2xl shadow-neutral-600/20'
            width='120%'
            height='100%'
          >
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                fill='#1359A1'
                paddingAngle={5}
                dataKey='Queries'
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line, Radar, and Composed Charts */}
    </div>
  )
}

export default Graphs
