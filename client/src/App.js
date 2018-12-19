import React, { Component } from 'react';;

import { Route, Switch } from 'react-router-dom';
import Admin from './Admin.jsx';
import Home from './Home.jsx';


class App extends Component {
  render() {

  const App = () => (
      <div>
        <Switch>
          <Route exact path='/' name="home" render={(props) => <Home {...props} />} />
          <Route path='/rsvp/admin' component={ Admin } />
        </Switch>
      </div>
  )

    return (
      <div>
        <Switch>
          <App/>
        </Switch>
      </div>
    );
  }
}

export default App;
