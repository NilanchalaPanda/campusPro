// Profiledetails/LocationPreferences.js
import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

const LocationPreferences = ({ expanded, editMode, toggleSection, toggleEditMode }) => {
  const [cities, setCities] = useState(['Mumbai', 'Bangalore']);
  const [states, setStates] = useState(['Maharashtra', 'Karnataka']);

  const addCity = () => setCities([...cities, '']);
  const removeCity = (index) => setCities(cities.filter((_, i) => i !== index));
  const addState = () => setStates([...states, '']);
  const removeState = (index) => setStates(states.filter((_, i) => i !== index));

  const handleCityChange = (index, value) => {
    const newCities = [...cities];
    newCities[index] = value;
    setCities(newCities);
  };

  const handleStateChange = (index, value) => {
    const newStates = [...states];
    newStates[index] = value;
    setStates(newStates);
  };

  const handleSave = () => {
    // Save logic can be added here if needed
    toggleEditMode(null);
  };

  return (
    <div className='overflow-hidden rounded-lg border border-gray-300 shadow-md'>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-gray-300 bg-purple-300 p-4 text-lg font-semibold'
        onClick={() => toggleSection('location-preferences')}
      >
        Location Preferences
        <div className='flex items-center space-x-2'>
          {expanded === 'location-preferences' && (
            <PencilIcon
              className={`h-6 w-6 ${editMode === 'location-preferences' ? 'text-purple-600' : 'text-purple-400'}`}
              aria-hidden='true'
              onClick={(e) => {
                e.stopPropagation();
                toggleEditMode('location-preferences');
              }}
            />
          )}
          <svg
            className={`h-5 w-5 text-purple-500 transition-transform duration-300 ease-in-out ${expanded === 'location-preferences' ? 'rotate-180' : 'rotate-0'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => toggleSection('location-preferences')}
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {expanded === 'location-preferences' && (
        <div className='space-y-4 bg-white p-4'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Preferred Cities:</label>
            {editMode === 'location-preferences' ? (
              <>
                {cities.map((city, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <input
                      type='text'
                      value={city}
                      onChange={(e) => handleCityChange(index, e.target.value)}
                      className='w-full rounded-md border border-gray-300 p-2'
                    />
                    <TrashIcon
                      className='h-6 w-6 text-red-500 cursor-pointer'
                      aria-hidden='true'
                      onClick={() => removeCity(index)}
                    />
                  </div>
                ))}
                <button
                  className='flex items-center space-x-1 rounded-md bg-purple-600 px-4 py-2 text-white'
                  onClick={addCity}
                >
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                  <span>Add City</span>
                </button>
              </>
            ) : (
              <span>{cities.join(', ')}</span>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Preferred States:</label>
            {editMode === 'location-preferences' ? (
              <>
                {states.map((state, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <input
                      type='text'
                      value={state}
                      onChange={(e) => handleStateChange(index, e.target.value)}
                      className='w-full rounded-md border border-gray-300 p-2'
                    />
                    <TrashIcon
                      className='h-6 w-6 text-red-500 cursor-pointer'
                      aria-hidden='true'
                      onClick={() => removeState(index)}
                    />
                  </div>
                ))}
                <button
                  className='flex items-center space-x-1 rounded-md bg-purple-600 px-4 py-2 text-white'
                  onClick={addState}
                >
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                  <span>Add State</span>
                </button>
              </>
            ) : (
              <span>{states.join(', ')}</span>
            )}
          </div>
          {editMode === 'location-preferences' && (
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
};

export default LocationPreferences;
