import React from 'react';
import './post-item.scss';

const PostItemView = (props) => (
    <div className="post-item-view">
        <div className="post-info">
            <div className="profile-img">
                <img className="image" src={props.postItem.userProfileImg} alt=""></img>
            </div>
            <div className="bind-area">
                <div className="profile-name">{props.postItem.userProfileName}</div>
                <div className="post-time">{props.postItem.postCreateTime}</div>
            </div>
            <div className="more"></div>
        </div>
        <div className="post-content">
            <div className="post-message">{props.postItem.postMessage}</div>
            <div className="post-img">
                {props.postItem.postImageList.map(postImg => 
                   ( <img src={postImg.postImageUrl} alt=""></img>)
                )}
            </div>
        </div>
    </div>
)

export default PostItemView;