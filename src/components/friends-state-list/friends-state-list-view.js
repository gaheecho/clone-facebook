import React from 'react';
import FriendStateItem from './friend-state-item';

const FriendsStateListView = () => (
    <div>
        Friends State List
        {
            [...Array(20).keys()].map((_,index)=><FriendStateItem key={`friend-state-item-${index}`}/>)
        }
    </div>
)

export default FriendsStateListView;
