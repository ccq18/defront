import React from 'react';
import Routes from '../Routes';

import reducers from '../reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

const App = ()=>{
    let store = createStore(
        combineReducers(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return <Provider store={store}>
      <Routes/>
    </Provider>;
}

export default App;
