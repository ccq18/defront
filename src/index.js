import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker';
import App from './defront/App';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
