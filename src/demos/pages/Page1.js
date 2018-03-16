import React from 'react';

import {Badge, Button} from 'reactstrap';

const Page1 = () => (
    <div>
        <h1>this is page 1</h1>
        <Button color="primary" outline>
            Page <Badge color="secondary">4</Badge>
        </Button>
    </div>
);


export default Page1;
