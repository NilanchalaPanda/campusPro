'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { useFormContext } from '@/context/FormContext'
import { FinancialAndReservationSchema } from '@/utils/validationSchema'

const FinanceNdReservationInformation = ({ nextStep }) => {
  const { formData, updateFormData } = useFormContext()
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(FinancialAndReservationSchema),
  })

  const annualFamilyIncome = watch('annualFamilyIncome')

  const onSubmit = (data) => {
    updateFormData(data)
    console.log('Financial hello')
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label className='block text-gray-700'>Annual Family Income</label>
        <Controller
          name='annualFamilyIncome'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value='0 - 1 lakh'>0 - 1 lakh</option>
              <option value='1 lakh - 3 lakh'>1 lakh - 3 lakh</option>
              <option value='3 lakh - 5 lakh'>3 lakh - 5 lakh</option>
              <option value='5 lakh - 8 lakh'>5 lakh - 8 lakh</option>
              <option value='Above 8 lakh'>Above 8 lakh</option>
            </select>
          )}
        />
        {errors.annualFamilyIncome && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.annualFamilyIncome.message}
          </p>
        )}
      </div>

      {annualFamilyIncome === 'Above 8 lakh' && (
        <div>
          <label className='block text-gray-700'>
            Eligible for Financial Aid
          </label>
          <Controller
            name='eligibleForFinancialAid'
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            )}
          />
          {errors.eligibleForFinancialAid && (
            <p className='mt-2 text-sm text-red-600'>
              {errors.eligibleForFinancialAid.message}
            </p>
          )}
        </div>
      )}

      <div>
        <label className='block text-gray-700'>
          Caste and Reservation Quota
        </label>
        <Controller
          name='casteAndReservationQuota'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value='General'>General</option>
              <option value='SC'>SC</option>
              <option value='ST'>ST</option>
              <option value='OBC'>OBC</option>
              <option value='EWS'>EWS</option>
              <option value='None'>None</option>
            </select>
          )}
        />
        {errors.casteAndReservationQuota && (
          <p className='mt-2 text-sm text-red-600'>
            {errors.casteAndReservationQuota.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-gray-700'>Defence Background</label>
        <Controller
          name='defenceBackground.hasBackground'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value='' disabled>
                Select Defence Background
              </option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          )}
        />
        {watch('defenceBackground.hasBackground') === 'yes' && (
          <div className='mt-2'>
            <Controller
              name='defenceBackground.type'
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                  <option value='' disabled>
                    Select Defence Type
                  </option>
                  <option value='Army'>Army</option>
                  <option value='Navy'>Navy</option>
                  <option value='Air Force'>Air Force</option>
                  <option value='Other'>Other</option>
                </select>
              )}
            />
            {errors.defenceBackground?.type && (
              <p className='mt-2 text-sm text-red-600'>
                {errors.defenceBackground.type.message}
              </p>
            )}
          </div>
        )}
      </div>

      <div className='mt-4'>
        <label className='block text-gray-700'>PWD Quota</label>
        <Controller
          name='pwdQuota'
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value='' disabled>
                Select PWD Quota Eligibility
              </option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          )}
        />
        {errors.pwdQuota && (
          <p className='mt-2 text-sm text-red-600'>{errors.pwdQuota.message}</p>
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

export default FinanceNdReservationInformation
