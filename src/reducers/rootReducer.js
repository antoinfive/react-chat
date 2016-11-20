import { combineReducers } from 'redux'
import messages from './messagesReducer'
import rooms from './roomsReducer'
import activeRoom from './activeRoomReducer' 

const rootReducer = combineReducers({
  messages,
  rooms,
  activeRoom
})

export default rootReducer
