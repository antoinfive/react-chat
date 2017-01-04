import initialState from './initialState'

export default function activeRoomReducer(state = initialState.activeRoom, action) {
   
  switch(action.type) {
    case 'JOIN_ROOM':
      return Object.assign({}, state.activeRoom, {
        title: action.room.title,
        messages: action.room.messages
      })
    case 'NEW_MESSAGE':
      return Object.assign({}, action.payload.room, { 
        messages: [...action.payload.room.messages, action.payload.newMessage]
      }) 
    default:
     return state; 
  }
}

