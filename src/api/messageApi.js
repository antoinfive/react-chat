import axios from 'axios'

class MessageApi {
   static newMessage(message) { 
     return axios.post('/messages', message)
  }
}

export default MessageApi
