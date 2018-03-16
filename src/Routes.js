import React from 'react';


import {
    Switch,
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import AllPage from './demos/AllPage'
import DemoRoutes from './demos/pages/Routes'
import TodoApp from './demos/todos/TodoApp'
import MinTodoApp from './demos/mintodos/MinTodoApp'


const Routes = () => (
    <Router>
        <Switch>
            <Route path="/demos" component={DemoRoutes}/>
            <Route path="/todoapp" component={TodoApp}/>

            <Route path="/mintodo" component={MinTodoApp}/>


            <Route path="/" component={AllPage}/>

        </Switch>
    </Router>
);


export default Routes;

