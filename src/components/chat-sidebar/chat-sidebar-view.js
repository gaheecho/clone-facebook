import React from 'react';
import ChatUserItem from './chat-user-item';
import './chat-sidebar.scss';

const ChatSidebarView = () => (
    <div className="chat-sidebar-view">
        {
            [...Array(10).keys()].map((_,index)=>(
            <ChatUserItem
                key={`chat-user-item-${index}`}
                chatUserItem={{isActive: true, userProfileName: 'Katherine Langford', userProfileImage: 'https://vignette.wikia.nocookie.net/love-simon/images/d/d2/LeahBurke1.png/revision/latest?cb=20180510201555'}}
            />
            ))
        }
        {
         [...Array(10).keys()].map((_,index)=>(
            <ChatUserItem
                key={`chat-user-item-${index}`}
                chatUserItem={{isActive: false, leftTime: '20h', userProfileName: 'Katherine Langford', userProfileImage: 'https://vignette.wikia.nocookie.net/love-simon/images/d/d2/LeahBurke1.png/revision/latest?cb=20180510201555'}}
            />
            ))   
        }
    </div>
)

export default ChatSidebarView;
