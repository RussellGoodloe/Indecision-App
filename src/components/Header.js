import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Task Master</h1>
        <p>
            <NavLink to="/create" activeClassName="is-active">New Task</NavLink> | 
            <NavLink to="/" activeClassName="is-active" exact={true}>My Tasks</NavLink> | 
            <NavLink to="/projects" activeClassName="is-active">My Projects</NavLink> | 
            <NavLink to="/settings" activeClassName="is-active">Settings</NavLink> | Logout
        </p>
    </header>
);

export default Header;

