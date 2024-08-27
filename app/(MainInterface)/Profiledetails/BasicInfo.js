'use client'
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline'


function BasicInfo() {
  const [editMode, setEditMode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [location, setLocation] = useState('Mumbai, Maharashtra');

  const toggleSection = (section) => {
    setExpanded(expanded === section ? '' : section);
  };

  const toggleEditMode = (mode) => {
    setEditMode(editMode === mode ? false : mode);
  };

  const handleSave = () => {
    // Save logic can be added here if needed
    toggleEditMode('basic-info');
  };

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('basic-info')}
      >
        Basic Information
        <div className='flex items-center space-x-2'>
          {expanded === 'basic-info' && (
            <PencilIcon
              className={`h-6 w-6 ${editMode ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('basic-info');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'basic-info' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('basic-info')}
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
      {expanded === 'basic-info' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Name:</label>
            {editMode ? (
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>
              Email Address:
            </label>
            {editMode ? (
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>
              Phone Number:
            </label>
            {editMode ? (
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{phone}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>
              Current Location (City/State):
            </label>
            {editMode ? (
              <input
                type='text'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              />
            ) : (
              <span>{location}</span>
            )}
          </div>
          {editMode && (
            <button
              className='rounded-md bg-purple-600 px-4 py-2 text-white'
              onClick={handleSave}
            >
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BasicInfo;
