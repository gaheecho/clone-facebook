import React, { useState } from 'react';
import './post-item.scss';
import CommentItem from '../comment-item';
import CommentInput from '../comment-input';
import CommentListContainer from '../../containers/comment-list';

const PostItemView = ({postItem}) => {
    const [isAllViewComments, setIsAllViewComments] = useState(false);

    const onClickComment = () => {
        
    };

    const onClickAllViewComments = () => {
        setIsAllViewComments(!isAllViewComments);
    }
    return (
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
                <span onClick={onClickComment}>Comment</span>
            </div>
        </div>
        <div className="comment-content">
            <CommentInput />
            {   
                isAllViewComments ?
                <CommentListContainer postNo={postItem.post_no}/>
                :
                postItem.comments.map(commentItem => (
                    <CommentItem
                        key={`comment-${commentItem.post_no}-${commentItem.comment_no}-${commentItem.user_no}`}
                        commentItem={commentItem}
                    />
                ))
                
            }
        </div>
        <div className="view-comment" onClick={onClickAllViewComments}>
            {
                postItem.comments.length > 0 && isAllViewComments ?
                <a>Hide some commens</a>
                :
                (postItem.comments.length === 0 ? null : <a>View more comments</a>)
            }
        </div>
    </div>
)
}

export default PostItemView;