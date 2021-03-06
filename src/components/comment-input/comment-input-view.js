import React from 'react';
import './comment-input.scss';

const CommentInput = () => (
    <div className="comment-input-view">
        <div className="profile-image">
            <img className="image" src={'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMTYwMDc4ODg5ODU0NTg0/timothee-chalamet-attends-chiamami-col-tuo-nome-call-me-by-your-name-photocall-at-de-russie-hotel-on-january-24-2018-in-rome-italy-photo-by-contigo_getty-images-square.jpg'}></img>
        </div>
        <div className="comment-input">
            <input
                type="text"
                placeholder="Write a comment..."
            >
            </input>
        </div>
    </div>
);

export default CommentInput;