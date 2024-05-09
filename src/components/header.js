import React from 'react';
import Nav from './nav';

function Header() {
    return (
        <header>
            <img src="icons_assets/logo.svg" alt="logo"/>
            <Nav/>
        </header>
    );
}

export default Header;