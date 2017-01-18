import messageApi from '../api/messageApi';

export function joinRoom(roomData) { 
  const payload = roomData.data
  return { type: 'JOIN_ROOM', payload} 
}

export function newRoom(room) {
  const newRoom = { title: room, messages: [{user: 'Chat Bot', content: 'Be Kind'}]}
  return (dispatch) => {
    return messageApi.createRoom(newRoom)
      .then((response) => {
        dispatch(newRoomSuccess(newRoom))
      })
    return response
 }
}

export function newRoomSuccess(payload){
  return { type: 'NEW_ROOM', payload }
}

export function updateRoomList(payload){
  return { type: 'UPDATE_ROOM_LIST', payload}
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

export function fetchRoomList(){
  return (dispatch) => {
    return messageApi.fetchRoomList()
      .then((response) => {
        dispatch(updateRoomList(response))
      })
    return response

  }
}
