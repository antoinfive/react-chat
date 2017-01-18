import initialState from './initialState'

export default function roomReducer(state = initialState.rooms, action) {
  debugger
  switch(action.type) {
    case 'NEW_ROOM':
      return [...state, action.payload]
    case 'UPDATE_ROOM_LIST':
      return action.payload.data  
    default:
     return state; 
  }
}


