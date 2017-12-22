import React, { Component } from 'react';

import { Badge, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Page extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/app">Public Page</Link></li>
            <li><Link to="/page">Protected Page</Link></li>
          </ul>
          <Button color="primary" outline>
            Page <Badge color="secondary">4</Badge>
          </Button>
        </div>
    );
  }
}

export default Page;
