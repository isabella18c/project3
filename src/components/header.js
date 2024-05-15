import React from 'react';
import Nav from './nav';

function Header() {
    return (
        <header className="Header">
            <div className="navbar">
            <img src="/Logo.svg" alt="Logo" />
            <Nav/>
            </div>
            <div className="header_container">
                <div className="header_content">
                    <div className="header_content_text">
                        <h1 className="header_content_text_title">Little Lemon</h1>
                        <h2 className="header_content_text_subtitle">Chicago</h2>
                        <p className="header_content_text_parragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="submit" className="header_content_text_button">Reserve a table</button>
                    </div>
                    <div className="Header_content_picture">
                        <img src="/bruchetta.svg"></img>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;