export default function user(state = '', action){
  switch(action.type){
    case 'NEW_USER':
      const newState = action.user
      return newState 
    default:
      return state
  }
}
