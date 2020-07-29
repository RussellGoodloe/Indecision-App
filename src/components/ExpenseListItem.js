import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { NavLink } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <h3>
            <NavLink to={`/edit/${id}`} activeClassName="is-active">
                {description}
            </NavLink>
        </h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
              -  
            {moment(createdAt).format('MMMM do, YYYY')}
        </p>
    </div>
); 


export default ExpenseListItem;