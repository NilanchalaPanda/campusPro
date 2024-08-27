"use client";
import { useState } from 'react';
import {ProfileBasicInfo,ProfileAcademicInfo,ProfileLocationPref,ProfileFinancialInfo,ProfileReservationInfo,ProfileCollegePref,ProfileImageUpload}  from '@/app/components'

const CollegeForm = () => {
  const [editMode, setEditMode] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [image, setImage] = useState(null); 

  const toggleSection = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const toggleEditMode = (id) => {
    setEditMode(editMode === id ? null : id);
  };

  return (
    <div className='min-h-screen bg-purple-50 p-2 overflow-auto'>
      <div className='mx-auto w-full max-w-screen-lg space-y-6'>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-2xl font-bold text-purple-700'>
            Student Information
          </h1>
          <ProfileImageUpload image={image} setImage={setImage} /> {/* Use the new component */}
        </div>

        <ProfileBasicInfo
          editMode={editMode === 'basic-info'}
          toggleEditMode={toggleEditMode}
        />

        <ProfileAcademicInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />

        <ProfileLocationPref
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />

        <ProfileFinancialInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />

        <ProfileReservationInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />

        <ProfileCollegePref
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />
      </div>
    </div>
  );
};

export default CollegeForm;
