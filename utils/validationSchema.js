import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  currentLocation: yup.string().required('Current location is required'),
  tenthGradePercentage: yup
    .number()
    .required('Tenth grade percentage is required')
    .min(0, 'Percentage cannot be less than 0')
    .max(100, 'Percentage cannot exceed 100'),
  twelfthGradePercentage: yup
    .number()
    .required('Twelfth grade percentage is required')
    .min(0, 'Percentage cannot be less than 0')
    .max(100, 'Percentage cannot exceed 100'),
  preferredStreams: yup
    .array()
    .of(yup.string().required('Stream is required'))
    .min(1, 'At least one preferred stream is required'),
  examsTaken: yup
    .array()
    .of(
      yup.object().shape({
        examName: yup.string().required('Exam name is required'),
        examScore: yup.number().required('Exam score is required'),
      }),
    )
    .min(1, 'At least one exam result is required'),
  collegeType: yup
    .string()
    .required('College type is required')
    .oneOf(['Government', 'Private', 'Deemed', 'Any']),
  casteAndReservationQuota: yup
    .string()
    .required('Quota type is required')
    .oneOf(['General', 'SC', 'ST', 'OBC', 'EWS', 'None']),
})
