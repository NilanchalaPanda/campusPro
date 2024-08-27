import * as yup from 'yup'

export const BasicInfoSchema = yup.object({
  studentName: yup.string().required('Name is required'),
  studentEmailAddress: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  studentPhoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  studentCurrentLocation: yup
    .object({
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
    })
    .required('Current location is required'),
})

export const AcademicInformationSchema = yup.object({
  tenthGradePercentage: yup
    .number()
    .min(0, 'Percentage must be at least 0')
    .max(100, 'Percentage cannot exceed 100')
    .required('10th grade percentage is required'),
  twelfthGradePercentage: yup
    .number()
    .min(0, 'Percentage must be at least 0')
    .max(100, 'Percentage cannot exceed 100')
    .required('12th grade percentage is required'),
  preferredStreams: yup
    .array()
    .of(yup.string().required('Stream is required'))
    .min(1, 'At least one stream must be selected')
    .required('Preferred streams are required'),
  examsTaken: yup
    .array()
    .of(
      yup.object({
        examName: yup.string().required('Exam name is required'),
        examScore: yup
          .number()
          .min(0, 'Score must be at least 0')
          .max(100, 'Score cannot exceed 100')
          .required('Exam score is required'),
      }),
    )
    .min(1, 'At least one exam must be added')
    .required('Exams taken are required'),
})

export const CollegePreferencesSchema = yup.object().shape({
  collegeType: yup
    .string()
    .oneOf(['Government', 'Private', 'Deemed', 'Any'])
    .required('College Type is required'),
  collegeRankingPreference: yup
    .string()
    .oneOf(['Top Tier', 'Middle Tier', 'Low Tier', 'No Preference'])
    .required('College Ranking Preference is required'),
  hostelRequirement: yup
    .string()
    .oneOf(['yes', 'no'], 'Hostel Requirement is required')
    .required('Hostel Requirement is required'),
  preferredStates: yup
    .array()
    .of(yup.string().required('State is required'))
    .min(1, 'At least one state must be selected')
    .required('Preferred states are required'),
})

export const FinancialAndReservationSchema = yup.object({
  annualFamilyIncome: yup.string().required('Annual family income is required'),
  eligibleForFinancialAid: yup.boolean(),
  casteAndReservationQuota: yup
    .string()
    .required('Caste and reservation quota is required'),
  defenceBackground: yup.object().shape({
    hasBackground: yup
      .string()
      .oneOf(['yes', 'no'], 'Defence background is required')
      .required('Defence background is required'),
    type: yup.string().when('hasBackground', {
      is: 'yes',
      then: (schema) => schema.required('Defence type is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
  }),
  pwdQuota: yup
    .string()
    .oneOf(['yes', 'no'], 'PWD Quota information is required')
    .required('PWD Quota information is required'),
})
