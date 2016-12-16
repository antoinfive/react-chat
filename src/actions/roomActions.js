export function joinRoom(room) { 
  return { type: 'JOIN_ROOM', room } 
}

export function newRoom(room) {
  const newRoom = { title: room, messages: [] }
  return { type: 'NEW_ROOM', newRoom }
}
