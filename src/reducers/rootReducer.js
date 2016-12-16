import { combineReducers } from 'redux'
import messages from './messagesReducer'
import rooms from './roomsReducer'
import activeRoom from './activeRoomReducer' 
import user from './usersReducer'

const rootReducer = combineReducers({
  messages,
  rooms,
  activeRoom,
  user
})

export default rootReducer
