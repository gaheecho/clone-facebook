import React from 'react';
import './chat-user-item.scss';

const ChatUserItemView = (props) => (
    <div className="chat-user-item-view">
        <div className="profile-img">
            <img className="image" src={props.chatUserItem.userProfileImage} alt=""></img>
        </div>
        
        <div className="profile-name">{props.chatUserItem.userProfileName}</div>
        {
            props.chatUserItem.isActive
            ? <div className="user-state-active"></div>
            : <div className="user-left-time">{props.chatUserItem.leftTime}</div>
        }
    </div>
)

export default ChatUserItemView;
