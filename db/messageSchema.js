import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
  user: String,
  content: String,
  room: String
})

export default mongoose.model('Message', messageSchema)
