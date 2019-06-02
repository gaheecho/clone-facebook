import React from 'react';
import './header.scss';

const HeaderView = (props) => (
    <header className="header">
        <div>logo</div>
        <input type="text"/>
        <button>User</button>
        <button>Home</button>
        <button>Find Friends</button>
        <button>create</button>
        <button>Friends Requests</button>
        <button>Message Requests</button>
        <button>Notifications</button>
        <button>Quick Help</button>
        <button>More</button>
    </header>
)

export default HeaderView;