import React from 'react';
import './header.scss';

const HeaderView = (props) => (
    <header className="header">
        {/* <div className="logo"></div> */}
        <div className="search-input">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="login-user-image">
            <img className="image" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMTYwMDc4ODg5ODU0NTg0/timothee-chalamet-attends-chiamami-col-tuo-nome-call-me-by-your-name-photocall-at-de-russie-hotel-on-january-24-2018-in-rome-italy-photo-by-contigo_getty-images-square.jpg" alt=""></img>
        </div>
        <a href="/#">Timothee</a>
        <a href="/#">Home</a>
        <button>Friends Requests</button>
        <button>Message</button>
        <button>Notifications</button>
    </header>
)

export default HeaderView;