import { createStore, applyMiddleware } from 'redux' 
import rootReducer from '../reducers/rootReducer'

export default () => {
  return createStore(
    rootReducer
  )
}
