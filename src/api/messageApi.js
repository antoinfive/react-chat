import axios from 'axios'

class MessageApi {
  static newMessage(message) {
  let parsed = JSON.parse(message.newMessage.message)
     return axios.post('/messages', parsed)
  }

  static fetchRoom(){
    return axios.get('/messages')
  }
}

export default MessageApi
