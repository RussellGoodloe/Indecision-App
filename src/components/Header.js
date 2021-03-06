import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <NavLink className="header__title" to="/" exact={true}>
                    <h1>Expensify</h1>
                </NavLink>
            </div>
        </div>
    </header>
);
export default Header;