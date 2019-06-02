import React from 'react';
import CreatePost from 'components/create-post';
import PostItem from 'components/post-item';

const TimelineView = () => (
    <div>
        Timeline
        <CreatePost/>
        {
            [...Array(10).keys()].map((_, index) => (<PostItem key={`post-item-${index}`}/>))
        }
    </div>
)

export default TimelineView;