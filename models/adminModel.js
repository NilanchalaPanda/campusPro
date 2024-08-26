import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
  queries: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Query',
      },
    ],
    default: [],
  },
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)

export default Admin
