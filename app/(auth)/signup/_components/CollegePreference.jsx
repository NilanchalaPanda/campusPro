'use client'

import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CollegePreferencesSchema } from '@/utils/validationSchema'
import { useFormContext } from '@/context/FormContext'

const CollegePreference = ({ nextStep }) => {
  const { formData, updateFormData } = useFormContext()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(CollegePreferencesSchema),
  })

  const {
    fields: stateFields,
    append: appendState,
    remove: removeState,
  } = useFieldArray({
    control,
    name: 'preferredStates',
  })

  const onSubmit = (data) => {
    console.log('College Preference')
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label className='block text-gray-700'>College Type</label>
        <Controller
          name='collegeType'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value=''>Select College Type</option>
              <option value='Government'>Government</option>
              <option value='Private'>Private</option>
              <option value='Deemed'>Deemed</option>
              <option value='Any'>Any</option>
            </select>
          )}
        />
        {errors.collegeType && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.collegeType.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>
          College Ranking Preference
        </label>
        <Controller
          name='collegeRankingPreference'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value=''>Select Ranking Preference</option>
              <option value='Top Tier'>Top Tier</option>
              <option value='Middle Tier'>Middle Tier</option>
              <option value='Low Tier'>Low Tier</option>
              <option value='No Preference'>No Preference</option>
            </select>
          )}
        />
        {errors.collegeRankingPreference && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.collegeRankingPreference.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Hostel Requirement</label>
        <Controller
          name='hostelRequirement'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value='' disabled>
                Select Hostel Requirement
              </option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          )}
        />
        {errors.hostelRequirement && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.hostelRequirement.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Preferred States</label>
        {stateFields.map((item, index) => (
          <div key={item.id} className='mt-2 flex items-center space-x-2'>
            <Controller
              name={`preferredStates.${index}`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  placeholder='State'
                  className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              )}
            />
            <button
              type='button'
              className='text-red-600 hover:text-red-800'
              onClick={() => removeState(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendState('')}
          className='mt-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          Add State
        </button>
        {errors.preferredStates && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.preferredStates.message}
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

export default CollegePreference
