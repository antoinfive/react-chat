import axios from 'axios'

class MessageApi {
  static newMessage(message) {
  let parsed = JSON.parse(message.newMessage.message)
     return axios.post('/messages', parsed)
  }
}

export default MessageApi
