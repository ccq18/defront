import React, {Component} from 'react';
import AppTodo from './components/apptodo/AppTodo';
import Page from './components/Page';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
          {/*<Route path="/app" component={AppTodo}/>*/}
          <Route path="*" component={AppTodo}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Routes;
