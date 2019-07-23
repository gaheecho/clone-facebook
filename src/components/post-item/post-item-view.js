import React from 'react';
import './post-item.scss';

const PostItemView = ({postItem}) => (
    <div className="post-item-view">
        <div className="post-info">
            <div className="profile-img">
                <img className="image" src={postItem.users.profile_image} alt=""></img>
            </div>
            <div className="bind-area">
                <div className="profile-name">{postItem.users.first_name} {postItem.users.last_name}</div>
                {/* <div className="post-time">{postItem.postCreateTime}</div> */}
            </div>
            <div className="more"></div>
        </div>
        <div className="post-content">
            <div className="post-message">{postItem.content}</div>
            <div className="post-img">
                {(postItem.postImageList || []).map(postImg => 
                   ( <img src={postImg.postImageUrl} alt=""></img>)
                )}
            </div>
        </div>
        <div className="bottom-content">
            <div className="buttons">
                <span>Like</span>
                <span>Comment</span>
            </div>
            
        </div>
    </div>
)

export default PostItemView;