import React, { PropTypes } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ControlLanguage from './ControlLanguage'

class LayoutPageContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render () {
    return (
      <div>
        <Header></Header>
        <SideBar menus={this.props.menus}></SideBar>
        <ControlLanguage />
      </div>
    )

  }
}

export default LayoutPageContainer;
