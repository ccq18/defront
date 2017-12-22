import React, {Component} from 'react';
import Routes from '../Routes';

import './App.css';
import reducers from '../reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

class App extends Component {
  render() {

    let store = createStore(
        combineReducers(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return <Provider store={store}>
      <Routes/>
    </Provider>;
  }
}

export default App;
