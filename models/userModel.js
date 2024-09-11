import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },

  // Academic Information
  tenthGradePercentage: {
    type: Number,
    required: true,
  },
  twelfthGradePercentage: {
    type: Number,
    required: true,
  },
  preferredStreams: {
    type: [String], // Array of strings for multiple stream options
    required: true,
  },
  examsTaken: {
    type: [
      {
        examName: {
          type: String,
          required: true,
        },
        examScore: {
          type: Number,
          required: true,
        },
      },
    ],
    default: [],
  },

  // College Preferences
  collegeType: {
    type: String,
    enum: ['Government', 'Private', 'Deemed', 'Any'],
    required: true,
  },

  // Reservation and Quota Information
  casteAndReservationQuota: {
    type: String,
    enum: ['General', 'SC', 'ST', 'OBC', 'EWS', 'None'],
  },
  chatIDs: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Chat',
      },
    ],
  },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User

// import mongoose from 'mongoose'

// const UserSchema = new mongoose.Schema({
//   // Basic Information
//   name: {
//     type: String,
//   },
//   phoneNumber: {
//     type: String,
//     unique: true,
//   },
//   currentLocation: {
//     type: String,
//   },

//   // Academic Information
//   tenthGradePercentage: {
//     type: Number,
//   },
//   twelfthGradePercentage: {
//     type: Number,
//   },
//   preferredStreams: {
//     type: String, // Array of strings for multiple stream options
//   },
//   examsTaken: {
//     type: [
//       {
//         examName: {
//           type: String,
//           required: true,
//         },
//         examScore: {
//           type: Number,
//           required: true,
//         },
//       },
//     ],
//     default: [],
//   },

//   // College Preferences
//   collegeType: {
//     type: String,
//     enum: ['Government', 'Private', 'Deemed', 'Any'],
//     default: '',
//   },

//   // Reservation and Quota Information
//   casteAndReservationQuota: {
//     type: String,
//     enum: ['General', 'SC', 'ST', 'OBC', 'EWS'],
//     default: 'General',
//   },
//   chatIDs: {
//     type: [
//       {
//         type: mongoose.Schema.ObjectId,
//         ref: 'Chat',
//       },
//     ],
//   },
// })

// const User = mongoose.models.User || mongoose.model('User', UserSchema)

// export default User
