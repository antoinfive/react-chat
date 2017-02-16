import initialState from './initialState'

export default function roomReducer(state = initialState.rooms, action) {
  debugger
  switch(action.type) {
    case 'NEW_ROOM':
      return [...state, action.payload]
    case 'UPDATE_ROOM_LIST':
      if(action.payload.data.length < 1){
        action.payload.data = false
      }
      return action.payload.data || state  
    default:
     return state; 
  }
}


