import { combineReducers } from 'redux'
import authReducer from './auth'
import noteReducer from './notes'
import darkReducer from './dark'

export default combineReducers({
  auth: authReducer,
  notes: noteReducer,
  dark: darkReducer
})
