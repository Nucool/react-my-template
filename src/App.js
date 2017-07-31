import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/NavBar'
import LayoutPageContainer from './components/layout/LayoutPageContainer'
import Routes from './routes'
import { BrowserRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const menus = [
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

class App extends Component {
  render() {
    //onst { from } = this.props.location.state || { from: { pathname: '/' }}

    return (
              <Routes menu={this.props.menu} language={this.props.language} />
            
    );
  }
}

/*<div>
<SideBar menus={this.props.menu}/>
<div className="content-wrapper">
<section className="content">
<Switch>
<Route exact path='/'
render={(props) => (
<HomePage {...props} data={this.props.language.Menu} />
)}
/>
<Route path='/client'
render={(props) => (
<ClientPage {...props} data={this.props.language.Menu} />
)}
/>
</Switch>
</section>
</div>
</div>*/

/*<ControlLanguage />*/
const mapStateToProps = state => {
  return {
    language: state.language,
    menu: state.menu
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

App = connect (
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;
