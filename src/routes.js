import React from 'react'
import { Switch, Route, Redirect,BrowserRouter as Router } from 'react-router-dom'

import HomePage from './components/HomePage'
import ClientPage from './components/ClientPage'
import Login from './components/Login'
import Public from './components/pages/Public'
import Authenticated from './components/pages/Authenticated'
import LayoutPageContainer from './components/layout/LayoutPageContainer'

/*const App = appProps => (
<Router>
<div>
<Switch>
<Public path="/login" component={Login} />
<Route exact path='/'
render={() => (
<HomePage data={language.Menu} />
)}
/>


</Switch>
</div>
</Router>
)*/
/*<Route exact path='/'
  render={() => (
    <HomePage data={language.Menu} />
  )}
  />*/
const Routes = ({menu, language}) => {
  return (
    <Router>

    <div>
      <div className="content-wrapper">
        <section className="content">
          <Switch>
            <Authenticated exact path="/" component={HomePage} />
            <Public path="/login" component={Login} />

            <PrivateRoute authed={false} path='/client'
              render={(props) => (
                <ClientPage data={language.Menu} />
              )}
              />
          </Switch>
        </section>

      </div>
    </div>
  </Router>
  )
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      false ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

    export default Routes
