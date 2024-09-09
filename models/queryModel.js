import mongoose from 'mongoose'

const QuerySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
})

// I AM THINKING TO RESPOND TO THIS QUERY HERE ITSELF, WHICH WILL BE REFLECTED EITHER IN THE WEBSITE OR DIRECTLY THE RESPONSE WILL BE SENT TO WHATSAPP OF THAT USER.

const Query = mongoose.models.Query || mongoose.model('Query', QuerySchema)

export default Query
