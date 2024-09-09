'use client'

import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AcademicInformationSchema } from '@/utils/validationSchema'
import { useFormContext } from '@/context/FormContext'

const AcademicInformation = ({ nextStep }) => {
  const { formData, updateFormData } = useFormContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(AcademicInformationSchema),
  })

  const {
    fields: streamFields,
    append: appendStream,
    remove: removeStream,
  } = useFieldArray({
    control,
    name: 'preferredStreams',
  })

  const {
    fields: examFields,
    append: appendExam,
    remove: removeExam,
  } = useFieldArray({
    control,
    name: 'examsTaken',
  })

  const onSubmit = (data) => {
    console.log('HELLO')
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Blueprint Your Academic Journey</h1>
        <p className='font-semibold text-black'>
          Detail your educational achievements, preferred study streams, and
          exam results to sketch out the academic path that will shape your
          engineering career.
        </p>
      </div>
      <div>
        <label className='block text-gray-700'>10th Grade Percentage</label>
        <Controller
          name='tenthGradePercentage'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type='number'
              step='0.01'
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          )}
        />
        {errors.tenthGradePercentage && (
          <p className='text-red-500'>{errors.tenthGradePercentage.message}</p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>12th Grade Percentage</label>
        <Controller
          name='twelfthGradePercentage'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type='number'
              step='0.01'
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          )}
        />
        {errors.twelfthGradePercentage && (
          <p className='text-red-500'>
            {errors.twelfthGradePercentage.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Preferred Streams</label>
        {streamFields.map((item, index) => (
          <div key={item.id} className='mt-2 flex items-center space-x-2'>
            <Controller
              name={`preferredStreams.${index}`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              )}
            />
            <button
              type='button'
              className='text-red-600 hover:text-red-800'
              onClick={() => removeStream(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendStream('')}
          className='mt-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          Add Stream
        </button>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Exams Taken
        </label>
        {examFields.map((item, index) => (
          <div key={item.id} className='space-y-2'>
            <div className='mt-2 flex items-center'>
              <Controller
                name={`examsTaken.${index}.examName`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type='text'
                    placeholder='Exam Name'
                    className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                )}
              />
            </div>
            <div className='mt-2 flex items-center'>
              <Controller
                name={`examsTaken.${index}.examScore`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type='number'
                    placeholder='Exam Score'
                    step='0.01'
                    className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                )}
              />
              <button
                type='button'
                className='ml-2 text-red-600 hover:text-red-900'
                onClick={() => removeExam(index)}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendExam({ examName: '', examScore: 0 })}
          className='mt-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700'
        >
          Add Exam
        </button>
        {errors.examsTaken && (
          <p className='text-sm text-red-500'>{errors.examsTaken.message}</p>
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

export default AcademicInformation
