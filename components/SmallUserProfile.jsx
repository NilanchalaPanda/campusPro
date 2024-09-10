'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/utils/validationSchema'

function SmallUserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='h-full rounded-l-2xl bg-white py-2 text-center md:p-3'>
      <h1 className='mt-2 text-2xl font-bold'>COLLEGE PREFERENCES</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-2 flex flex-col items-center justify-center space-y-4'
      >
        {/* FIRST DIV WITH NAME AND PHONE NUMBER */}
        <div className='flex space-x-2'>
          <div className='flex flex-col items-start justify-start'>
            <label htmlFor='name' className='pl-1 font-bold text-gray-400'>
              Enter Your Name
            </label>
            <input
              {...register('name')}
              placeholder='Name'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            <p className='text-red-500'>{errors.name?.message}</p>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <label htmlFor='name' className='pl-1 font-bold text-gray-400'>
              Enter Your Phone No
            </label>
            <input
              {...register('phoneNumber')}
              placeholder='Phone Number'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            <p className='text-red-500'>{errors.phoneNumber?.message}</p>
          </div>
        </div>

        {/* SECOND DIV WITH 10th AND 12th PRECENTAGE */}
        <div className='flex items-center justify-center space-x-2'>
          <input
            {...register('tenthGradePercentage')}
            placeholder='10th Grade Percentage'
            type='number'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <p className='text-red-500'>{errors.tenthGradePercentage?.message}</p>
          <input
            {...register('twelfthGradePercentage')}
            placeholder='12th Grade Percentage'
            type='number'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <p className='text-red-500'>
            {errors.twelfthGradePercentage?.message}
          </p>
        </div>

        {/* THIRD DIV WITH STREAMS AND LOCATIONS */}
        <div className='flex items-center justify-center space-x-2'>
          <input
            {...register('preferredStreams')}
            placeholder='Preferred Streams (comma separated)'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <p className='text-red-500'>{errors.preferredStreams?.message}</p>
          <input
            {...register('currentLocation')}
            placeholder='Current Location'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <p className='text-red-500'>{errors.currentLocation?.message}</p>
        </div>

        {/* FOURTH DIV WITH NUMBER OF EXAMS TAKEN */}
        <div>
          <input
            {...register('examsTaken[0].examName')}
            placeholder='Exam Name'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <input
            {...register('examsTaken[0].examScore')}
            placeholder='Exam Score'
            type='number'
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          />
          <p className='text-red-500'>{errors.examsTaken?.message}</p>
        </div>

        {/* FIFTH DIV WITH COLLEGE TYPE AND QUOTA */}
        <div className='flex items-center justify-center space-x-2'>
          <select
            {...register('collegeType')}
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          >
            <option value=''>Select College Type</option>
            <option value='Government'>Government</option>
            <option value='Private'>Private</option>
            <option value='Deemed'>Deemed</option>
            <option value='Any'>Any</option>
          </select>
          <p className='text-red-500'>{errors.collegeType?.message}</p>
          <select
            {...register('casteAndReservationQuota')}
            className='m-1 w-full rounded-xl border border-gray-300 p-2'
          >
            <option value=''>Select Quota</option>
            <option value='General'>General</option>
            <option value='SC'>SC</option>
            <option value='ST'>ST</option>
            <option value='OBC'>OBC</option>
            <option value='EWS'>EWS</option>
            <option value='None'>None</option>
          </select>
          <p className='text-red-500'>
            {errors.casteAndReservationQuota?.message}
          </p>
        </div>

        <button
          type='submit'
          className='cursor-pointer rounded-md border-none bg-green-500 px-4 py-2 text-white'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SmallUserProfile
