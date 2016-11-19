import initialState from './initialState'

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case 'NEW_MESSAGE':
      return [...state, action.message]
    default:
      return state;
  }
}
