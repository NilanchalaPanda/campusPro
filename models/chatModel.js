import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  isValid: {
    type: String,
    default: true,
  },
  voting: {
    type: String,
    enum: ['upVote', 'downVote'],
  },
})

const Chat = mongoose.models.Chat || mongoose.model('Chat', ChatSchema)

export default Chat
