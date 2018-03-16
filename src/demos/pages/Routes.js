import React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';
import Page from './Page'
import Page1 from './Page1'
import {Badge, Button} from 'reactstrap';


const Page2 = () => (
    <div>
        <h1>this is page 1</h1>
        <Button color="primary" outline>
            Page <Badge color="secondary">4</Badge>
        </Button>
    </div>
);
const Routes = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
            <li><Link to={`${match.url}/page`}>page0</Link></li>
            <li><Link to={`${match.url}/page1`}>page1 </Link></li>
            <li><Link to={`${match.url}/page2`}>page2 </Link></li>


        </ul>
        <Route path={`${match.url}/page`} component={Page}/>
        <Route path={`${match.url}/page1`} component={Page1}/>
        <Route path={`${match.url}/page2`} component={Page2}/>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default Routes;
