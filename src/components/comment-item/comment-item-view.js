import React from 'react';
import './comment-item.scss';

const CommentItem = ({commentItem}) => (
    <div className="comment-item-view">
        <div className="comment-item">
            <div className="profile-image">
                <img className="image" src={'https://vignette.wikia.nocookie.net/love-simon/images/d/d2/LeahBurke1.png/revision/latest?cb=20180510201555'} alt=""></img>
            </div>
            
            <div className="comment-content">
            <span className="user-name">Katherine Langford</span>
            <span className="comment-text">wow this is test..</span>
            </div>
        </div>
        <div className="buttons">
            <span className="button">Like</span>
            <span className="button">Reply</span>
        </div>
    </div>
)

export default CommentItem;