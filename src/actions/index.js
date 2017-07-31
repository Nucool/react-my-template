import actionTypes from '../constants/actionTypes'

export const switchLanguage = language => {
  return {
    type: actionTypes.layout.SWITCH_LANGUAGE,
    language: language
  }
}


export const gotoPage = (menu) => {
  return {
    type: actionTypes.menu.GOTO_PAGE,
    id: menu.id
  }
}
