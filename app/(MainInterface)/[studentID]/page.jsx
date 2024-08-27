"use client";

import { useState } from 'react';
import BasicInfo from '../Profiledetails/BasicInfo';
import AcademicInfo from '../Profiledetails/AcademicInfo';
import LocationPreferences from '../Profiledetails/LocationPreferences';
import FinancialInfo from '../Profiledetails/FinancialInfo';
import ReservationQuotaInfo from '../Profiledetails/ReservationQuotaInfo';
import CollegePreferences from '../Profiledetails/CollegePreferences';
import ImageUpload from '../Profiledetails/ImageUpload'; 

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
          <ImageUpload image={image} setImage={setImage} /> {/* Use the new component */}
        </div>
        <BasicInfo
          editMode={editMode === 'basic-info'}
          toggleEditMode={toggleEditMode}
        />
        <AcademicInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />
        <LocationPreferences
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />
        <FinancialInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />
        <ReservationQuotaInfo
          expanded={expanded}
          editMode={editMode}
          toggleSection={toggleSection}
          toggleEditMode={toggleEditMode}
        />
        <CollegePreferences
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
