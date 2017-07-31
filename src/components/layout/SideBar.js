import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import { gotoPage } from '../../actions'
import { connect } from 'react-redux'

let SideBar = ({menus, dispatch}) => {

  function handleGotoPage(menu){
    console.log('gotopage')
    dispatch(gotoPage(menu))
  }

  var menuItems = []
  if(menus !== undefined){
    menus.forEach(menu => {
      menuItems.push(<MenuItem menu={menu} key={menu.name} handleGotoPage={handleGotoPage} />)
    })
  }

  return(

    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header" style={{color:'#fff'}}>
            Main Menu
          </li>

          {menuItems}

        </ul>
      </section>

    </aside>
  )
}


SideBar = connect()(SideBar)

export default SideBar
