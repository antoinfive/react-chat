import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
  img: { data: Buffer,
    contentType: String
  }
}) 

export default mongoose.model('Image', imageSchema)
