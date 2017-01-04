import axios from 'axios'

// export default (message) => { 
//   return (dispatch) => {
//     axios.post('/messages', message).then( (response) => { 
//       dispatch(newMessage)
//     })
//   }
// }

 class MessageApi {
   static newMessage(message) { 
     return axios.post('/messages', message)
  }
}

export default MessageApi
