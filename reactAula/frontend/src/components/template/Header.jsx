import './Header.css';
import React from 'react';

const Header = (props) => (
    <header className="header d-flex align-items-center">
        <h1 className='me-3'>
            <i className={`fa fa-${props.icon}`}></i>
        </h1>
        <div>
            <h2>{props.title}</h2>
            <p className="lead text-muted">{props.subtitle}</p>
        </div>
    </header>
);

export default Header;
