import React from 'react'
import { Link } from 'react-router-dom'

function MenuItemSpan(props){
  if(props.icon === undefined)
  {
    return (
      <div></div>
    )
  }
  else {
    return (
      <span className="pull-right-container">
        {props.icon.green !== undefined &&
          <small className="label pull-right bg-green">{props.icon.green}</small>}
        {props.icon.yellow !== undefined &&
          <small className="label pull-right bg-yellow">{props.icon.yellow}</small>}
        {props.icon.red !== undefined &&
          <small className="label pull-right bg-red">{props.icon.red}</small>}
      </span>
    )
  }
}

const MenuItem = ({ menu, handleGotoPage }) => {
  var active = menu.active ? 'active' : ''
  return(
    <li className={active} >
      <Link to={menu.linkTo} onClick={e => {
          handleGotoPage(menu)
        }}>
        <i className={menu.iconMenu} />
        <span>{menu.name}</span>

        <MenuItemSpan key={menu.name} icon={menu.icon} />
      </Link>
    </li>
  )
}

export default MenuItem
