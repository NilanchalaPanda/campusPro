import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: Chat,
  },
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
  }
})

const Chat = mongoose.models.Chat || mongoose.model('Chat', ChatSchema)

export default Chat
