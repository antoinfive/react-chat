export function newMessage(data) {
  let parsed;
  let payload; 
  if(data.newMessage.message){
    parsed = JSON.parse(data.newMessage.message)
    payload = {room: data.room, newMessage: {user: data.newMessage.user, message: parsed.message}}
  } else {
    payload = {room: data.room, newMessage: {user: data.newMessage.user, imageUrl: data.newMessage.imageUrl}}
  }
 
  return { type: 'NEW_MESSAGE', payload }
}
