import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
  title: String
})

export default mongoose.model('Room', roomSchema)
