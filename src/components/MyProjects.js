import React from 'react';
import { NavLink } from 'react-router-dom';

const MyProjects = () => (
    <div>
        <h2>Select a project below to view more info about it!</h2>
        <p><NavLink to="/project/22" activeClassName="is-active">Project 1</NavLink></p>
    </div>
);
export default MyProjects;