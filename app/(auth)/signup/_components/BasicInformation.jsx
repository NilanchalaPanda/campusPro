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
        <h1 className='text-3xl font-bold'>
          Engineering Your Future: Start with the Basics
        </h1>
        <p className='font-semibold text-black'>
          Let’s lay the foundation by sharing your name, contact details, and
          current location. Every great engineer starts with a strong base!
        </p>
      </div>
      <div>
        <label className='block font-medium text-black'>
        Full Name
        </label>
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
        <label className='block font-medium text-black'>
           Email Address
        </label>
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
        <label className='block font-medium text-black'>
         Phone Number
        </label>
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
        <label className='block font-medium text-black'>
            City
        </label>
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
        <label className='block font-medium text-black'>
           State
        </label>
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

      <div className='flex justify-end'>
        
        <button
          type='submit'
          className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default BasicInformation
