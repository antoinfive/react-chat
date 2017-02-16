import messageApi from '../api/messageApi' 

export function saveMessage(data) {
  let payload; 
  // debugger
  if(!data.newMessage.image){
    payload = {room: data.room, newMessage: {user: data.newMessage.user, content: data.newMessage.message}}
  } else {
    payload = {room: data.room, newMessage: {user: data.newMessage.user, image: data.newMessage.image}}
  }
 
  return { type: 'NEW_MESSAGE', payload }
}

export function createMessage(data) { 
 return (dispatch) => {
    return messageApi.newMessage(data).then((response) => {
      dispatch(saveMessage({room: data.room, message: response.data}))
      return response
    })
  }
}
