import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className="main-header">
      <a href="index2.html" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg">
          <div >
            Nurse NA
          </div>
        </span>
      </a>
      <NavBar />
    </header>
  )
}

export default Header
