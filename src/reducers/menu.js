import actionTypes from '../constants/actionTypes'

const initialState = [
  {
    id: 1,
    name: 'Home',
    linkTo: '/',
    active: false,
    iconMenu: 'fa fa-th',
    icon: {
      red: 3,
      green: 16
    }
  },
  {
    id: 2,
    name: 'Client',
    linkTo: '/client',
    iconMenu: 'fa fa-pie-chart',
    active: true
  }
]

const menu = (state = initialState, action) => {
  console.log(action.id)
  switch (action.type) {
    case actionTypes.menu.GOTO_PAGE:
      return state.map(menu =>
      (menu.id === action.id) ? {...menu, active: true} : {...menu, active: false})
    default:
      return state
  }
}

export default menu
