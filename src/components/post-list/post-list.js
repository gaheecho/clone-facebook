import React from 'react';
import CreatePost from 'components/create-post';
import PostItem from 'components/post-item';
import './post-list.scss';

const PostList = ({ postList }) => {
    return <div className="post-list">
        Timeline
        <CreatePost/>
        {
            postList.map((postItem, index) => (
            <PostItem
                key={`post-item-${index}`}
                postItem={postItem}
            />
            ))
        }
    </div>
}

export default PostList;