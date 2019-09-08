import React from 'react';
import PostItemView from './post-item-view';

const PostItemContainer = (props) => {
    return (<PostItemView postItem={props.postItem}/>)
}

export default PostItemContainer;
