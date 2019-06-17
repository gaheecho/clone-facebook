import React from 'react';
import ChatUserItemView from './chat-user-item-view';

const ChatUserItemContainer = (props) => (
    <ChatUserItemView
        chatUserItem={props.chatUserItem}
    />
)

export default ChatUserItemContainer;
