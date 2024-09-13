// 'use client'

// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { validationSchema } from '@/utils/validationSchema'
// import toast from 'react-hot-toast'

// function SmallUserProfile() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   })

//   const [userDet, setUserDet] = useState('')

//   async function onSubmit(data) {
//     console.log(data)

//     // Fetch userID from localStorage
//     const userID = localStorage.getItem('userID')

//     // If no userID is found, handle it (either throw an error or create a new user, depending on your logic)
//     if (!userID) {
//       console.error('No userID found in localStorage.')
//       return
//     }

//     // Append userID to the data being sent to the backend
//     const updatedData = {
//       ...data,
//       userID, // Add the userID from localStorage
//     }

//     try {
//       const userRes = await fetch('http://localhost:3000/api/user', {
//         method: 'PATCH',
//         body: JSON.stringify(updatedData), // Pass the updated data with userID
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })

//       const userData = await userRes.json()
//       // console.log(userData)
//       reset()
//       toast.success('Preferences updated successfully')
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   const getErrorMessage = (field) => {
//     switch (field) {
//       case 'name':
//         return 'Name required.'
//       case 'phoneNumber':
//         return 'Valid phone number needed.'
//       case 'tenthGradePercentage':
//         return 'Valid 10th percentage required.'
//       case 'twelfthGradePercentage':
//         return 'Valid 12th percentage required.'
//       case 'preferredStreams':
//         return 'Preferred stream required.'
//       case 'currentLocation':
//         return 'Location required.'
//       case 'examsTaken[0].examName':
//         return 'Exam name required.'
//       case 'examsTaken[0].examScore':
//         return 'Exam score required.'
//       case 'collegeType':
//         return 'Select college type.'
//       case 'casteAndReservationQuota':
//         return 'Select quota.'
//       default:
//         return ''
//     }
//   }

//   return (
//     <div className='h-full overflow-auto rounded-l-2xl bg-white p-2 pb-3 text-center md:p-3'>
//       <h1 className='mt-2 flex items-center justify-center text-2xl font-bold'>
//         COLLEGE PREFERENCES
//       </h1>

//       {/* FORM VEIWING DIV */}
//       <div></div>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className='mt-2 flex flex-col items-center justify-center space-y-4'
//       >
//         {/* FIRST DIV WITH NAME AND PHONE NUMBER */}
//         <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='name'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Enter Your Name
//             </label>
//             <input
//               {...register('name')}
//               placeholder='Name'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.name && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('name')}
//               </p>
//             )}
//           </div>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='phoneNumber'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Enter Your Phone No
//             </label>
//             <input
//               {...register('phoneNumber')}
//               placeholder='Phone Number'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.phoneNumber && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('phoneNumber')}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* SECOND DIV WITH 10th AND 12th PERCENTAGE */}
//         <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='tenthGradePercentage'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               10th Grade Percentage
//             </label>
//             <input
//               {...register('tenthGradePercentage')}
//               placeholder='10th Grade Percentage'
//               type='number'
//               min='0'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.tenthGradePercentage && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('tenthGradePercentage')}
//               </p>
//             )}
//           </div>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='twelfthGradePercentage'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               12th Grade Percentage
//             </label>
//             <input
//               {...register('twelfthGradePercentage')}
//               placeholder='12th Grade Percentage'
//               type='number'
//               min='0'
//               max='100'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.twelfthGradePercentage && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('twelfthGradePercentage')}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* THIRD DIV WITH PREFERRED STREAMS AND LOCATION */}
//         <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='preferredStreams'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Preferred Stream
//             </label>
//             <input
//               {...register('preferredStreams')}
//               placeholder='Stream'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.preferredStreams && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('preferredStreams')}
//               </p>
//             )}
//           </div>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='currentLocation'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Current Location
//             </label>
//             <input
//               {...register('currentLocation')}
//               placeholder='Location'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors.currentLocation && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('currentLocation')}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* FOURTH DIV WITH EXAM NAME AND SCORE */}
//         <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='examsTaken[0].examName'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Exam Name
//             </label>
//             <input
//               {...register('examsTaken[0].examName')}
//               placeholder='Exam Name'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors['examsTaken[0].examName'] && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('examsTaken[0].examName')}
//               </p>
//             )}
//           </div>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='examsTaken[0].examScore'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Exam Score
//             </label>
//             <input
//               {...register('examsTaken[0].examScore')}
//               placeholder='Score'
//               type='number'
//               className='w-full rounded-xl border border-gray-300 p-2'
//             />
//             {errors['examsTaken[0].examScore'] && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('examsTaken[0].examScore')}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* FIFTH DIV WITH COLLEGE TYPE AND RESERVATION QUOTA */}
//         <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='collegeType'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               College Type
//             </label>
//             <select
//               {...register('collegeType')}
//               className='w-full rounded-xl border border-gray-300 p-2'
//             >
//               <option value='' disabled>
//                 Select College Type
//               </option>
//               <option value='Public'>Public</option>
//               <option value='Private'>Private</option>
//             </select>
//             {errors.collegeType && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('collegeType')}
//               </p>
//             )}
//           </div>
//           <div className='flex flex-1 flex-col items-start'>
//             <label
//               htmlFor='casteAndReservationQuota'
//               className='pl-1 text-left text-sm font-bold text-gray-400'
//             >
//               Reservation Quota
//             </label>
//             <select
//               {...register('casteAndReservationQuota')}
//               className='w-full rounded-xl border border-gray-300 p-2'
//             >
//               <option value='' disabled>
//                 Select Quota
//               </option>
//               <option value='General'>General</option>
//               <option value='OBC'>OBC</option>
//               <option value='SC/ST'>SC/ST</option>
//             </select>
//             {errors.casteAndReservationQuota && (
//               <p className='text-left text-[0.7rem] text-red-500'>
//                 {getErrorMessage('casteAndReservationQuota')}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* SUBMIT BUTTON */}
//         <div className='w-full'>
//           <button
//             type='submit'
//             className='w-full cursor-pointer rounded-md border-none bg-green-500 px-4 py-2 text-white'
//           >
//             {setUserDet === '' ? 'Add' : 'Update'}
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SmallUserProfile

'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/utils/validationSchema'
import toast from 'react-hot-toast'

function SmallUserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, // For setting default values in the form
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const [userDet, setUserDet] = useState(null) // Changed to null to differentiate between loading and empty state
  const [editMode, setEditMode] = useState(false) // To track if the form is in edit mode or not
  const [firstUser, isfirstUser] = useState(false)

  console.log('User details : ', userDet)

  useEffect(() => {
    // Fetch user details on component load
    const fetchUserDetails = async () => {
      const userID = localStorage.getItem('userID')
      if (userID) {
        try {
          const res = await fetch(`http://localhost:3000/api/user/${userID}`)
          const data = await res.json()
          setUserDet(data) // Set fetched user data

          if (res.message === 'User not found') {
            isfirstUser(true)
          }
        } catch (err) {
          console.error('Error fetching user details:', err)
        } finally {
          isfirstUser(false)
        }
      }
    }
    fetchUserDetails()
  }, [])

  async function onSubmit(data) {
    const userID = localStorage.getItem('userID')
    if (!userID) {
      try {
        const res = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        })
        const userData = await res.json()
        localStorage.setItem('userID', userData?.user?._id)
        setUserDet(userData) // Update the user details after submission
        reset()
        toast.success('Preferences added successfully')
      } catch (e) {
        console.log('Post Error:', e)
      }
    } else {
      const updatedData = { ...data, userID }

      try {
        const userRes = await fetch('http://localhost:3000/api/user', {
          method: 'PATCH',
          body: JSON.stringify(updatedData),
          headers: { 'Content-Type': 'application/json' },
        })

        const userData = await userRes.json()
        setUserDet(userData) // Update the user details after submission
        setEditMode(false) // Exit edit mode after submission
        reset()
        toast.success('Preferences updated successfully')
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleEdit = () => {
    setEditMode(true) // Enable editing mode
    // Pre-fill the form with current user data
    setValue('name', userDet?.user?.name)
    setValue('phoneNumber', userDet?.user?.phoneNumber)
    setValue('tenthGradePercentage', userDet?.user?.tenthGradePercentage)
    setValue('twelfthGradePercentage', userDet?.user?.twelfthGradePercentage)
    setValue('preferredStreams', userDet?.user?.preferredStreams)
    setValue('currentLocation', userDet?.user?.currentLocation)
    setValue('examsTaken[0].examName', userDet?.user?.examsTaken?.[0]?.examName)
    setValue(
      'examsTaken[0].examScore',
      userDet?.user?.examsTaken?.[0]?.examScore,
    )
    setValue('collegeType', userDet?.user?.collegeType)
    setValue(
      'casteAndReservationQuota',
      userDet?.user?.casteAndReservationQuota,
    )
  }

  console.log(userDet)

  console.log(!editMode && userDet?.user?.phoneNumber)

  const getErrorMessage = (field) => {
    switch (field) {
      case 'name':
        return 'Name required.'
      case 'phoneNumber':
        return 'Valid phone number needed.'
      case 'tenthGradePercentage':
        return 'Valid 10th percentage required.'
      case 'twelfthGradePercentage':
        return 'Valid 12th percentage required.'
      case 'preferredStreams':
        return 'Preferred stream required.'
      case 'currentLocation':
        return 'Location required.'
      case 'examsTaken[0].examName':
        return 'Exam name required.'
      case 'examsTaken[0].examScore':
        return 'Exam score required.'
      case 'collegeType':
        return 'Select college type.'
      case 'casteAndReservationQuota':
        return 'Select quota.'
      default:
        return ''
    }
  }

  console.log(userDet?.user?.phoneNumber)
  console.log(userDet?.user?.phoneNumber === 0 || userDet?.user === undefined)

  return (
    <div className='h-full overflow-auto rounded-l-2xl bg-white p-2 pb-3 text-center md:p-3'>
      <h1 className='mt-2 flex items-center justify-center text-2xl font-bold'>
        COLLEGE PREFERENCES
      </h1>

      {/* Check if userDet is empty or phone number is not set */}
      {!editMode && (!userDet?.user?.phoneNumber || firstUser) && (
        <div className={`mt-5 ${editMode ? 'hidden' : 'block'}`}>
          <p className='font-bold text-gray-600'>ADD YOUR PREFERENCES</p>
          <button
            onClick={() => setEditMode(true)}
            className='mt-4 cursor-pointer rounded-md border border-green-600 bg-green-400 px-4 py-2 text-white'
          >
            Add Preferences
          </button>
        </div>
      )}

      {/* If userDet exists, show the preview */}
      {!editMode && userDet?.user?.phoneNumber ? (
        <div className='mt-3'>
          <div className='flex flex-col justify-start space-y-4 text-xl'>
            <div>
              <span className='font-bold'> Name:</span>{' '}
              <span className='font-medium'>{userDet?.user?.name}</span>
            </div>
            <div>
              <span className='font-bold'> Phone Number:</span>{' '}
              <span className='font-medium'>{userDet?.user?.phoneNumber}</span>
            </div>
            <div>
              <span className='font-bold'>10h Percentage :</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.tenthGradePercentage}
              </span>
            </div>
            <div>
              <span className='font-bold'>12th Percentage:</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.twelfthGradePercentage}
              </span>
            </div>
            <div>
              <span className='font-bold'> Current Location:</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.currentLocation}
              </span>
            </div>
            <div>
              <span className='font-bold'>Prefered Stream:</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.preferredStreams}
              </span>
            </div>
            <div>
              <span className='font-bold'> Exams Taken:</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.examsTaken?.[0]?.examName}
              </span>
            </div>
            <div>
              <span className='font-bold'> Exam Score:</span>{' '}
              <span className='font-medium'>
                {userDet?.user?.examsTaken?.[0]?.examScore}
              </span>
            </div>
          </div>
          <button
            onClick={handleEdit}
            className='mt-4 w-[50%] cursor-pointer rounded-md border-2 border-orange-500 bg-orange-300 px-2 py-2 text-center font-semibold text-gray-800'
          >
            Update Preferences
          </button>
        </div>
      ) : null}

      {/* If editMode is enabled, show the form */}
      {editMode && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-2 flex flex-col items-center justify-center space-y-4'
        >
          {/* FIRST DIV WITH NAME AND PHONE NUMBER */}
          <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='name'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Enter Your Name
              </label>
              <input
                {...register('name')}
                placeholder='Name'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.name && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('name')}
                </p>
              )}
            </div>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='phoneNumber'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Enter Your Phone No
              </label>
              <input
                {...register('phoneNumber')}
                placeholder='Phone Number'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.phoneNumber && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('phoneNumber')}
                </p>
              )}
            </div>
          </div>

          {/* SECOND DIV WITH 10th AND 12th PERCENTAGE */}
          <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='tenthGradePercentage'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                10th Grade Percentage
              </label>
              <input
                {...register('tenthGradePercentage')}
                placeholder='10th Grade Percentage'
                type='number'
                min='0'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.tenthGradePercentage && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('tenthGradePercentage')}
                </p>
              )}
            </div>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='twelfthGradePercentage'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                12th Grade Percentage
              </label>
              <input
                {...register('twelfthGradePercentage')}
                placeholder='12th Grade Percentage'
                type='number'
                min='0'
                max='100'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.twelfthGradePercentage && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('twelfthGradePercentage')}
                </p>
              )}
            </div>
          </div>

          {/* THIRD DIV WITH PREFERRED STREAMS AND LOCATION */}
          <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='preferredStreams'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Preferred Stream
              </label>
              <input
                {...register('preferredStreams')}
                placeholder='Stream'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.preferredStreams && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('preferredStreams')}
                </p>
              )}
            </div>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='currentLocation'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Current Location
              </label>
              <input
                {...register('currentLocation')}
                placeholder='Location'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors.currentLocation && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('currentLocation')}
                </p>
              )}
            </div>
          </div>

          {/* FOURTH DIV WITH EXAM NAME AND SCORE */}
          <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='examsTaken[0].examName'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Exam Name
              </label>
              <input
                {...register('examsTaken[0].examName')}
                placeholder='Exam Name'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors['examsTaken[0].examName'] && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('examsTaken[0].examName')}
                </p>
              )}
            </div>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='examsTaken[0].examScore'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Exam Score
              </label>
              <input
                {...register('examsTaken[0].examScore')}
                placeholder='Score'
                type='number'
                className='w-full rounded-xl border border-gray-300 p-2'
              />
              {errors['examsTaken[0].examScore'] && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('examsTaken[0].examScore')}
                </p>
              )}
            </div>
          </div>

          {/* FIFTH DIV WITH COLLEGE TYPE AND RESERVATION QUOTA */}
          <div className='flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='collegeType'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                College Type
              </label>
              <select
                {...register('collegeType')}
                className='w-full rounded-xl border border-gray-300 p-2'
              >
                <option value='' disabled>
                  Select College Type
                </option>
                <option value='Public'>Public</option>
                <option value='Private'>Private</option>
              </select>
              {errors.collegeType && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('collegeType')}
                </p>
              )}
            </div>
            <div className='flex flex-1 flex-col items-start'>
              <label
                htmlFor='casteAndReservationQuota'
                className='pl-1 text-left text-sm font-bold text-gray-400'
              >
                Reservation Quota
              </label>
              <select
                {...register('casteAndReservationQuota')}
                className='w-full rounded-xl border border-gray-300 p-2'
              >
                <option value='' disabled>
                  Select Quota
                </option>
                <option value='General'>General</option>
                <option value='OBC'>OBC</option>
                <option value='SC/ST'>SC/ST</option>
              </select>
              {errors.casteAndReservationQuota && (
                <p className='text-left text-[0.7rem] text-red-500'>
                  {getErrorMessage('casteAndReservationQuota')}
                </p>
              )}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className='w-full'>
            <button
              type='submit'
              className='w-full cursor-pointer rounded-md border-none bg-green-500 px-4 py-2 text-white'
            >
              {userDet?.user?.phoneNumber === 0 || userDet?.user === undefined
                ? 'Add'
                : 'Update'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default SmallUserProfile
