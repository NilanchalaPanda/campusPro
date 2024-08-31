import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  currentLocation: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
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
  collegeRankingPreference: {
    type: String,
    enum: ['Top Tier', 'Middle Tier', 'Low Tier', 'No Preference'],
    required: true,
  },
  hostelRequirement: {
    type: Boolean,
    required: true,
  },
  preferredStates: {
    type: [String], // Array of strings for multiple state options
    required: true,
  },

  // Financial Information
  annualFamilyIncome: {
    type: String,
  },
  eligibleForFinancialAid: {
    type: Boolean,
    required: true,
  },

  // Reservation and Quota Information
  casteAndReservationQuota: {
    type: String,
    enum: ['General', 'SC', 'ST', 'OBC', 'EWS', 'None'],
  },
  defenceBackground: {
    hasBackground: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      enum: ['Army', 'Navy', 'Air Force', 'Other'],
    },
  },
  pwdQuota: {
    type: Boolean,
    required: true,
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
