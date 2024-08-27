"use client";
import { useState } from 'react';
import { Pencil } from 'lucide-react';


const ProfileReservationInfo = ({ expanded, editMode, toggleSection, toggleEditMode }) => {
  const [casteCategory, setCasteCategory] = useState('General');
  const [reservationQuota, setReservationQuota] = useState('Yes');
  const [defenceBackground, setDefenceBackground] = useState('Yes');
  const [pwdQuota, setPwdQuota] = useState('Yes');

  const casteCategories = [
    'General',
    'OBC',
    'SC',
    'ST',    
    'Other'
  ];

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('reservation-quota-info')}
      >
        Reservation and Quota Information
        <div className='flex items-center space-x-2'>
          {expanded === 'reservation-quota-info' && (
            <Pencil
              className={`h-6 w-6 ${editMode === 'reservation-quota-info' ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('reservation-quota-info');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'reservation-quota-info' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('reservation-quota-info')}
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {expanded === 'reservation-quota-info' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Caste Category:</label>
            {editMode === 'reservation-quota-info' ? (
              <select
                value={casteCategory}
                onChange={(e) => setCasteCategory(e.target.value)}
                className='w-full rounded-md border border-gray-300 p-2'
              >
                {casteCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            ) : (
              <span>{casteCategory}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Reservation Quota:</label>
            {editMode === 'reservation-quota-info' ? (
              <div className='flex flex-col space-y-2'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='Yes'
                    checked={reservationQuota === 'Yes'}
                    onChange={(e) => setReservationQuota(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>Yes</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='No'
                    checked={reservationQuota === 'No'}
                    onChange={(e) => setReservationQuota(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>No</span>
                </label>
              </div>
            ) : (
              <span>{reservationQuota}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Defence Background:</label>
            {editMode === 'reservation-quota-info' ? (
              <div className='flex flex-col space-y-2'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='Yes'
                    checked={defenceBackground === 'Yes'}
                    onChange={(e) => setDefenceBackground(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>Yes</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='No'
                    checked={defenceBackground === 'No'}
                    onChange={(e) => setDefenceBackground(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>No</span>
                </label>
              </div>
            ) : (
              <span>{defenceBackground}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>PWD Quota:</label>
            {editMode === 'reservation-quota-info' ? (
              <div className='flex flex-col space-y-2'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='Yes'
                    checked={pwdQuota === 'Yes'}
                    onChange={(e) => setPwdQuota(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>Yes</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    value='No'
                    checked={pwdQuota === 'No'}
                    onChange={(e) => setPwdQuota(e.target.value)}
                    className='form-radio text-purple-600'
                  />
                  <span className='ml-2'>No</span>
                </label>
              </div>
            ) : (
              <span>{pwdQuota}</span>
            )}
          </div>
          {editMode === 'reservation-quota-info' && (
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

export default ProfileReservationInfo;
