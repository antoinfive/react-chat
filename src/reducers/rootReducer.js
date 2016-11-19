import { combineReducers } from 'redux'
import messages from './messagesReducer'

const rootReducer = combineReducers({
  messages
})

export default rootReducer
