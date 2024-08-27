// Profiledetails/FinancialInfo.js
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const FinancialInfo = ({ expanded, editMode, toggleSection, toggleEditMode }) => {
  const [income, setIncome] = useState('₹1,00,001 - ₹3,00,000');
  const [eligibleForAid, setEligibleForAid] = useState('Yes');

  const incomeOptions = [
    '₹50,000 - ₹1,00,000',
    '₹1,00,001 - ₹3,00,000',
    '₹3,00,001 - ₹5,00,000',
    '₹5,00,001 - ₹8,00,000',
    '₹8,00,001 - above',   
  ];

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('financial-info')}
      >
        Financial Information
        <div className='flex items-center space-x-2'>
          {expanded === 'financial-info' && (
            <PencilIcon
              className={`h-6 w-6 ${editMode === 'financial-info' ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('financial-info');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'financial-info' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('financial-info')}
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {expanded === 'financial-info' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Annual Family Income:</label>
            {editMode === 'financial-info' ? (
              <select
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              >
                {incomeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <span>{income}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Eligible for Scholarships:</label>
            {editMode === 'financial-info' ? (
              <div className='flex flex-col space-y-2'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='Yes'
                    checked={eligibleForAid === 'Yes'}
                    onChange={(e) => setEligibleForAid(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>Yes</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='No'
                    checked={eligibleForAid === 'No'}
                    onChange={(e) => setEligibleForAid(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>No</span>
                </label>
              </div>
            ) : (
              <span>{eligibleForAid}</span>
            )}
          </div>
          {editMode === 'financial-info' && (
            <button
              className='rounded-md bg-purple-600 px-4 py-2 text-white'
              onClick={() => toggleEditMode(null)}
            >
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FinancialInfo;
