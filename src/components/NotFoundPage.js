import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>404!</h3>
        <p>Whoops! Looks like we couldn't find that page!</p>
        <p>
            <Link to="/">Click here to return to the home page</Link>
        </p>
    </div>
);

export default NotFoundPage;
