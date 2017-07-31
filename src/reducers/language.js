import actionTypes from '../constants/actionTypes'
import en from '../i18n/en.js'
import th from '../i18n/th.js'

const initialState = en

const getLanguage = (language) => {
  if(language === 'en')
  {
    return en
  }
  else {
    return th
  }
}

const language = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.layout.SWITCH_LANGUAGE:
    return getLanguage(action.language)
    default:
    return state
  }
}

export default language
