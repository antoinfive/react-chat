import mongoose from 'mongoose'
// import imageSchema from './imageSchema'

const imageSchema = mongoose.Schema({
   data: String,
   contentType: String
}) 

const messageSchema = mongoose.Schema({
  user: String,
  content: String,
  room: String,
  image: String 
})

export default mongoose.model('Message', messageSchema)
