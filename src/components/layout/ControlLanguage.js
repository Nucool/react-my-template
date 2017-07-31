import React from 'react'
import { connect } from 'react-redux'
import { switchLanguage } from '../../actions'

let ControlLanguage = ({ dispatch }) => {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <div className="tab-content" >
        <ul>
          <li><a href="#" data-target="#" onClick={e => { dispatch(switchLanguage('en')) }}>EN</a></li>
          <li><a href="#" data-target="#" onClick={e => { dispatch(switchLanguage('th')) }}>TH</a></li>
        </ul>
      </div>
    </aside>
  )
}

ControlLanguage = connect()(ControlLanguage)

export default ControlLanguage
