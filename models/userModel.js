import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  currentLocation: {
    type: String,
  },

  // Academic Information
  tenthGradePercentage: {
    type: Number,
  },
  twelfthGradePercentage: {
    type: Number,
  },
  preferredStreams: {
    type: String, // Array of strings for multiple stream options
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
    default: 'Any',
  },

  // Reservation and Quota Information
  casteAndReservationQuota: {
    type: String,
    enum: ['General', 'SC', 'ST', 'OBC', 'EWS'],
    default: 'General',
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
