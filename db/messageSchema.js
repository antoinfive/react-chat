import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
  user: String,
  content: String
})

export default mongoose.model('Message', messageSchema)
