// Profiledetails/AcademicInfo.js
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const AcademicInfo = ({ expanded, editMode, toggleSection, toggleEditMode }) => {
  const [tenPercent, setTenPercent] = useState('85%');
  const [twelvePercent, setTwelvePercent] = useState('90%');
  const [preferredStream, setPreferredStream] = useState('Computer Science');

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('academic-info')}
      >
        Academic Information
        <div className='flex items-center space-x-2'>
          {expanded === 'academic-info' && (
            <PencilIcon
              className={`h-6 w-6 ${editMode === 'academic-info' ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('academic-info');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'academic-info' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('academic-info')}
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {expanded === 'academic-info' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>10th Grade Percentage/CGPA:</label>
            {editMode === 'academic-info' ? (
              <input
                type='text'
                value={tenPercent}
                onChange={(e) => setTenPercent(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{tenPercent}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>12th Grade Percentage/CGPA:</label>
            {editMode === 'academic-info' ? (
              <input
                type='text'
                value={twelvePercent}
                onChange={(e) => setTwelvePercent(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{twelvePercent}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Preferred Stream:</label>
            {editMode === 'academic-info' ? (
              <input
                type='text'
                value={preferredStream}
                onChange={(e) => setPreferredStream(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{preferredStream}</span>
            )}
          </div>
          {editMode === 'academic-info' && (
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

export default AcademicInfo;
