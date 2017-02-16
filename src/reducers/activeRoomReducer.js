import initialState from './initialState'

export default function activeRoomReducer(state = initialState.activeRoom, action) {
  switch(action.type) {
    case 'JOIN_ROOM':
      return Object.assign({}, state.activeRoom, {
        title: (action.payload.room || action.payload[0].room),
        messages: action.payload
      })
    case 'NEW_MESSAGE':
      return Object.assign({}, action.payload.room, { 
        messages: [...action.payload.room.messages, action.payload.newMessage]
      }) 
    default:
     return state; 
  }
}

