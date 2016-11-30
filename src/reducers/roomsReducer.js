import initialState from './initialState'

export default function roomReducer(state = initialState.rooms, action) {

  switch(action.type) {
    case 'NEW_ROOM':
      return [...state, action.room]
    case 'UPDATE_ROOM':
      return [...state]  
    default:
     return state; 
  }
}


