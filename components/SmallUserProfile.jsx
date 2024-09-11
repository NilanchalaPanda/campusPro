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
  async function onSubmit(data) {
    console.log(data);
  
    // Fetch userID from localStorage
    const userID = localStorage.getItem('userID');
  
    // If no userID is found, handle it (either throw an error or create a new user, depending on your logic)
    if (!userID) {
      console.error('No userID found in localStorage.');
      return;
    }
  
    // Append userID to the data being sent to the backend
    const updatedData = {
      ...data,
      userID, // Add the userID from localStorage
    };
  
    try {
      const userRes = await fetch('http://localhost:3000/api/user', {
        method: 'PUT',
        body: JSON.stringify(updatedData), // Pass the updated data with userID
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const userData = await userRes.json();
      console.log(userData);
    } catch (e) {
      console.error(e);
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
    <div className='h-full overflow-auto rounded-l-2xl bg-white p-2 pb-3 text-center md:p-3'>
      <h1 className='mt-2 flex items-center justify-center text-2xl font-bold'>
        COLLEGE PREFERENCES
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-2 flex flex-col items-center justify-center space-y-4'
      >
        {/* FIRST DIV WITH NAME AND PHONE NUMBER */}
        <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='name'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Enter Your Name
            </label>
            <input
              {...register('name')}
              placeholder='Name'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.name && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('name')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='phoneNumber'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Enter Your Phone No
            </label>
            <input
              {...register('phoneNumber')}
              placeholder='Phone Number'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.phoneNumber && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('phoneNumber')}
              </p>
            )}
          </div>
        </div>

        {/* SECOND DIV WITH 10th AND 12th PERCENTAGE */}
        <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='tenthGradePercentage'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              10th Grade Percentage
            </label>
            <input
              {...register('tenthGradePercentage')}
              placeholder='10th Grade Percentage'
              type='number'
              min='0'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.tenthGradePercentage && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('tenthGradePercentage')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='twelfthGradePercentage'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              12th Grade Percentage
            </label>
            <input
              {...register('twelfthGradePercentage')}
              placeholder='12th Grade Percentage'
              type='number'
              min='0'
              max='100'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.twelfthGradePercentage && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('twelfthGradePercentage')}
              </p>
            )}
          </div>
        </div>

        {/* THIRD DIV WITH PREFERRED STREAMS AND LOCATION */}
        <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='preferredStreams'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Preferred Stream
            </label>
            <input
              {...register('preferredStreams')}
              placeholder='Stream'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.preferredStreams && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('preferredStreams')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='currentLocation'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Current Location
            </label>
            <input
              {...register('currentLocation')}
              placeholder='Location'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors.currentLocation && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('currentLocation')}
              </p>
            )}
          </div>
        </div>

        {/* FOURTH DIV WITH EXAM NAME AND SCORE */}
        <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='examsTaken[0].examName'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Exam Name
            </label>
            <input
              {...register('examsTaken[0].examName')}
              placeholder='Exam Name'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors['examsTaken[0].examName'] && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('examsTaken[0].examName')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='examsTaken[0].examScore'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Exam Score
            </label>
            <input
              {...register('examsTaken[0].examScore')}
              placeholder='Score'
              type='number'
              className='w-full rounded-xl border border-gray-300 p-2'
            />
            {errors['examsTaken[0].examScore'] && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('examsTaken[0].examScore')}
              </p>
            )}
          </div>
        </div>

        {/* FIFTH DIV WITH COLLEGE TYPE AND RESERVATION QUOTA */}
        <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='collegeType'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              College Type
            </label>
            <select
              {...register('collegeType')}
              className='w-full rounded-xl border border-gray-300 p-2'
            >
              <option value='' disabled>
                Select College Type
              </option>
              <option value='Public'>Public</option>
              <option value='Private'>Private</option>
            </select>
            {errors.collegeType && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('collegeType')}
              </p>
            )}
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <label
              htmlFor='casteAndReservationQuota'
              className='pl-1 text-left text-sm font-bold text-gray-400'
            >
              Reservation Quota
            </label>
            <select
              {...register('casteAndReservationQuota')}
              className='w-full rounded-xl border border-gray-300 p-2'
            >
              <option value='' disabled>
                Select Quota
              </option>
              <option value='General'>General</option>
              <option value='OBC'>OBC</option>
              <option value='SC/ST'>SC/ST</option>
            </select>
            {errors.casteAndReservationQuota && (
              <p className='text-left text-[0.7rem] text-red-500'>
                {getErrorMessage('casteAndReservationQuota')}
              </p>
            )}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className='w-full'>
          <button
            type='submit'
            className='w-full cursor-pointer rounded-md border-none bg-green-500 px-4 py-2 text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SmallUserProfile
