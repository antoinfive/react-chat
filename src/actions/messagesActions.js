import messageApi from '../api/messageApi' 

export function saveMessage(data) {
  let payload; 
  if(data.message){
    payload = {room: data.room, newMessage: {user: data.message.user, content: data.message.message}}
  } else {
    payload = {room: data.room, newMessage: {user: data.newMessage.user, imageUrl: data.newMessage.imageUrl}}
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
