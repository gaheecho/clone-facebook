import React from 'react';
import './header.scss';

const HeaderView = (props) => (
    <header className="header">
        <div className="logo"></div>
        <div className="search-input">
            <input type="text" placeholder="Search"/>
        </div>
        <a href="/#">My Page</a>
        <a href="/#">Home</a>
        <a href="/#">create</a>
        <button>Friends Requests</button>
        <button>Message</button>
        <button>Notifications</button>
    </header>
)

export default HeaderView;