'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/utils/validationSchema'

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  async function onSubmit(data) {
    console.log(data)
  
    // Fetch userID from localStorage
    const userID = localStorage.getItem('userID')
  
    if (!userID) {
      console.error('No userID found in localStorage.')
      return
    }
  
    const updatedData = {
      ...data,
      userID,
    }
  
    try {
      const userRes = await fetch('http://localhost:3000/api/user', {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const userData = await userRes.json()
      console.log(userData)
    } catch (e) {
      console.error(e)
    }
  }

  const getErrorMessage = (field) => {
    switch (field) {
      case 'name':
        return 'Name required.'
      case 'phoneNumber':
        return 'Valid phone number needed.'
      case 'tenthGradePercentage':
        return 'Valid 10th percentage required.'
      case 'twelfthGradePercentage':
        return 'Valid 12th percentage required.'
      case 'preferredStreams':
        return 'Preferred stream required.'
      case 'currentLocation':
        return 'Location required.'
      case 'examsTaken[0].examName':
        return 'Exam name required.'
      case 'examsTaken[0].examScore':
        return 'Exam score required.'
      case 'collegeType':
        return 'Select college type.'
      case 'casteAndReservationQuota':
        return 'Select quota.'
      default:
        return ''
    }
  }

  return (
    <div className='h-full overflow-auto rounded-lg bg-white  p-4 text-center md:p-6'>
      <h1 className='mt-2 pt-10 text-2xl font-bold md:text-4xl'>
        COLLEGE PREFERENCES
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-4 flex flex-col space-y-4'
      >
        {/* FIRST DIV WITH NAME AND PHONE NUMBER */}
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='name'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Enter Your Name
            </label>
            <input
              {...register('name')}
              placeholder='Name'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.name && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('name')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='phoneNumber'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Enter Your Phone No
            </label>
            <input
              {...register('phoneNumber')}
              placeholder='Phone Number'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.phoneNumber && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('phoneNumber')}
              </p>
            )}
          </div>
        </div>

        {/* SECOND DIV WITH 10th AND 12th PERCENTAGE */}
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='tenthGradePercentage'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              10th Grade Percentage
            </label>
            <input
              {...register('tenthGradePercentage')}
              placeholder='10th Grade Percentage'
              type='number'
              min='0'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.tenthGradePercentage && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('tenthGradePercentage')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='twelfthGradePercentage'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              12th Grade Percentage
            </label>
            <input
              {...register('twelfthGradePercentage')}
              placeholder='12th Grade Percentage'
              type='number'
              min='0'
              max='100'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.twelfthGradePercentage && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('twelfthGradePercentage')}
              </p>
            )}
          </div>
        </div>

        {/* THIRD DIV WITH PREFERRED STREAMS AND LOCATION */}
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='preferredStreams'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Preferred Stream
            </label>
            <input
              {...register('preferredStreams')}
              placeholder='Stream'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.preferredStreams && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('preferredStreams')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='currentLocation'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Current Location
            </label>
            <input
              {...register('currentLocation')}
              placeholder='Location'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.currentLocation && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('currentLocation')}
              </p>
            )}
          </div>
        </div>

        {/* FOURTH DIV WITH EXAM NAME AND SCORE */}
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='examsTaken[0].examName'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Exam Name
            </label>
            <input
              {...register('examsTaken[0].examName')}
              placeholder='Exam Name'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors['examsTaken[0].examName'] && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('examsTaken[0].examName')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='examsTaken[0].examScore'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Exam Score
            </label>
            <input
              {...register('examsTaken[0].examScore')}
              placeholder='Score'
              type='number'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors['examsTaken[0].examScore'] && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('examsTaken[0].examScore')}
              </p>
            )}
          </div>
        </div>

        {/* FIFTH DIV WITH COLLEGE TYPE AND RESERVATION QUOTA */}
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='collegeType'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Type of College
            </label>
            <input
              {...register('collegeType')}
              placeholder='Type of College'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.collegeType && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('collegeType')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col'>
            <label
              htmlFor='casteAndReservationQuota'
              className='pl-1 text-left text-lg font-bold text-gray-400 md:text-xl'
            >
              Caste & Reservation Quota
            </label>
            <input
              {...register('casteAndReservationQuota')}
              placeholder='Quota'
              className='w-full rounded-lg border border-gray-300 p-3 text-base'
            />
            {errors.casteAndReservationQuota && (
              <p className='text-left text-sm text-red-500'>
                {getErrorMessage('casteAndReservationQuota')}
              </p>
            )}
          </div>
        </div>

        <button
          type='submit'
          className='rounded-md  cursor-pointer border-none  bg-green-500 py-3 px-6 text-base font-medium text-white  hover:bg-green-60000'
        >
            Submit
        </button>
      </form>
    </div>
  )
}

export default Profile
