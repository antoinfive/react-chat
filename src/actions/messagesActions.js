export function newMessage(data) {
  const parsed = JSON.parse(data.newMessage.message)
  const payload = {room: data.room, newMessage: {user: data.newMessage.user, message: parsed.message}}
  return { type: 'NEW_MESSAGE', payload }
}
