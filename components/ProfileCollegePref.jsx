"use client";
import { useState } from 'react';
import { Pencil } from 'lucide-react';


const ProfileCollegePref = ({ expanded, editMode, toggleSection, toggleEditMode }) => {
  const [typeOfCollege, setTypeOfCollege] = useState('Government');
  const [collegePreference, setCollegePreference] = useState('Tier 1');
  const [hostelRequirement, setHostelRequirement] = useState('Yes');

  const collegeTypes = ['Government', 'Private', 'Deemed', 'Any'];
  const preferences = ['Tier 1', 'Tier 2', 'Tier 3', 'other'];

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('college-preferences')}
      >
        College Preferences
        <div className='flex items-center space-x-2'>
          {expanded === 'college-preferences' && (
            <Pencil
              className={`h-6 w-6 ${editMode === 'college-preferences' ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('college-preferences');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'college-preferences' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('college-preferences')}
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {expanded === 'college-preferences' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Type of College:</label>
            {editMode === 'college-preferences' ? (
              <select
                value={typeOfCollege}
                onChange={(e) => setTypeOfCollege(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              >
                {collegeTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            ) : (
              <span>{typeOfCollege}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>College Preference:</label>
            {editMode === 'college-preferences' ? (
              <select
                value={collegePreference}
                onChange={(e) => setCollegePreference(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              >
                {preferences.map((preference, index) => (
                  <option key={index} value={preference}>
                    {preference}
                  </option>
                ))}
              </select>
            ) : (
              <span>{collegePreference}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Hostel Requirement:</label>
            {editMode === 'college-preferences' ? (
              <div className='flex flex-col space-y-2'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='Yes'
                    checked={hostelRequirement === 'Yes'}
                    onChange={(e) => setHostelRequirement(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>Yes</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='No'
                    checked={hostelRequirement === 'No'}
                    onChange={(e) => setHostelRequirement(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>No</span>
                </label>
              </div>
            ) : (
              <span>{hostelRequirement}</span>
            )}
          </div>
          {editMode === 'college-preferences' && (
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

export default ProfileCollegePref;
