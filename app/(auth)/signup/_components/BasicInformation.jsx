'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useFormContext } from '@/context/FormContext'
import { BasicInfoSchema } from '@/utils/validationSchema'
import { useForm, Controller } from 'react-hook-form'

const BasicInformation = ({ nextStep }) => {
  const { formData, updateFormData } = useFormContext()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(BasicInfoSchema),
  })

  const onSubmit = (data) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label className='block text-gray-700'>Name</label>
        <Controller
          name='studentName'
          control={control}
          render={({ field }) => (
            <input
              type='text'
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your name'
            />
          )}
        />
        {errors.studentName && (
          <p className='text-red-500'>{errors.studentName.message}</p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Email Address</label>
        <Controller
          name='studentEmailAddress'
          control={control}
          render={({ field }) => (
            <input
              type='email'
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your email'
            />
          )}
        />
        {errors.studentEmailAddress && (
          <p className='text-red-500'>{errors.studentEmailAddress.message}</p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Phone Number</label>
        <Controller
          name='studentPhoneNumber'
          control={control}
          render={({ field }) => (
            <input
              type='text'
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your phone number'
            />
          )}
        />
        {errors.studentPhoneNumber && (
          <p className='text-red-500'>{errors.studentPhoneNumber.message}</p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>City</label>
        <Controller
          name='studentCurrentLocation.city'
          control={control}
          render={({ field }) => (
            <input
              type='text'
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your city'
            />
          )}
        />
        {errors.studentCurrentLocation?.city && (
          <p className='text-red-500'>
            {errors.studentCurrentLocation.city.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>State</label>
        <Controller
          name='studentCurrentLocation.state'
          control={control}
          render={({ field }) => (
            <input
              type='text'
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your state'
            />
          )}
        />
        {errors.studentCurrentLocation?.state && (
          <p className='text-red-500'>
            {errors.studentCurrentLocation.state.message}
          </p>
        )}
      </div>

      <button
        type='submit'
        className='w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700'
      >
        Next
      </button>
    </form>
  )
}

export default BasicInformation
