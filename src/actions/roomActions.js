import messageApi from '../api/messageApi';

export function joinRoom(roomData) { 
  const payload = roomData.data
  return { type: 'JOIN_ROOM', payload} 
}

export function newRoom(room) {
  const newRoom = { title: room, messages: [] }
  return { type: 'NEW_ROOM', newRoom }
}

export function fetchRoomData(){
  console.log('in fetch room')
  return (dispatch) => {
    return messageApi.fetchRoom()
      .then((response) => {
        dispatch(joinRoom(response))
      })
    return response
  }

}
