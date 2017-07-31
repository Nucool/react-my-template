import { combineReducers } from 'redux'
import language from './language'
import menu from './menu'

const nursenaApp = combineReducers({
  language,
  menu
})

export default nursenaApp
