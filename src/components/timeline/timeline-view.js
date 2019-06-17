import React from 'react';
import CreatePost from 'components/create-post';
import PostItem from 'components/post-item';
import './timeline.scss';

const TimelineView = () => (
    <div className="timeline-view">
        Timeline
        <CreatePost/>
        {
            [...Array(10).keys()].map((_, index) => (
            <PostItem
                key={`post-item-${index}`}
                postItem={{userProfileImg:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMTYwMDc4ODg5ODU0NTg0/timothee-chalamet-attends-chiamami-col-tuo-nome-call-me-by-your-name-photocall-at-de-russie-hotel-on-january-24-2018-in-rome-italy-photo-by-contigo_getty-images-square.jpg', userProfileName: 'Timothee Chalamet', postCreateTime: '5 hrs', postMessage: 'Hi Test', postImageList: []}}
            />
            ))
        }
    </div>
)

export default TimelineView;