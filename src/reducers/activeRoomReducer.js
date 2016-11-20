import initialState from './initialState'

export default function activeRoomReducer(state = initialState.activeRoom, action) {
  switch(action.type) {
    case 'JOIN_ROOM':
      return Object.assign({}, state.activeRoom, {
        title: action.room.title,
        messages: action.room.messages
      }) 
    default:
     return state; 
  }
}

