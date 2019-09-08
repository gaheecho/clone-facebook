import React from 'react';
import './comment-item.scss';

const CommentItem = ({commentItem}) => {
    return (
    <div className="comment-item-view">
        <div className="comment-item">
            <div className="profile-image">
                {
                    commentItem.users.profile_image ? 
                    <img className="image" src={commentItem.users.profile_image} alt=""></img>
                    :
                    <img className="image unknown" src={'https://unicons.iconscout.com/release/v1.0.0/svg/user.svg'} alt=""></img>
                }
                
            </div>
            
            <div className="comment-content">
            <span className="user-name">{commentItem.users.first_name} {commentItem.users.last_name}</span>
            <span className="comment-text">{commentItem.content}</span>
            </div>
        </div>
        <div className="buttons">
            <span className="button">Like</span>
            <span className="button">Reply</span>
        </div>
    </div>
    )
}

export default CommentItem;