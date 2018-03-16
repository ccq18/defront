import React from 'react';
import {
    Link,
} from 'react-router-dom';

const AllPage = () => (
    <div>
        <h2>demos</h2>
        <ul>
            <li><Link to={`/demos`}>pages </Link></li>
            <li><Link to={`/mintodo`}>mintodoapp </Link></li>
            <li><Link to={`/todoapp`}>todoapp </Link></li>

        </ul>
    </div>
);


export default AllPage;