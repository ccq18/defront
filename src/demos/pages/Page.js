import React, { Component } from 'react';

import { Badge, Button } from 'reactstrap';

class Page extends Component {
  render() {
    return (
        <div>
            <h1>this is page 0</h1>
          <Button color="primary" outline>
            Page <Badge color="secondary">4</Badge>
          </Button>
        </div>
    );
  }
}

export default Page;
