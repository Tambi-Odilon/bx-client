import React, { Component } from 'react';
import './App.css';
import { Switch, HashRouter } from 'react-router-dom';

import AuthenticatedRoute from './services/AutheticatedRoute';
import { DefaultLayout } from './containers';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <Switch>
          {/* <Route path='/error' name='Error 404' component= { Page404 } /> */}
          {/* <Route exact path='/login' name="Login page" component={ Login } /> */}
          <AuthenticatedRoute path="/" name="Home" component={ DefaultLayout } />
          
        </Switch>
      </HashRouter>
  );
}
  }

export default App;
