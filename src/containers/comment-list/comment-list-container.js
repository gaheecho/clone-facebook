import React, { useState, useEffect } from 'react';
import CommentItem from 'components/comment-item';
import axios from 'axios';
import './comment-list-container.scss';


const CommentListContainer = ({postNo}) => {
    const LIMIT = 5;
    const [commentList, setCommentList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [offset, setOffset] = useState(0);
    const [rowCount, setRowCount] = useState(0);

    useEffect(() => {
        requestComments(postNo);
    }, [])

    useEffect(() => {
        if(isFetching && commentList.length > 0 && commentList.length !== rowCount) {
            requestComments(postNo);
        }
        return () => {
            setIsFetching(false);
        }
    }, [commentList, isFetching, rowCount, offset]);

    const requestComments = async(postNo) => {
        try {
            const result = await axios.get(`http://localhost:4000/api/comments/${postNo}?offset=${offset}&limit=${LIMIT}`);
            if(result) {
                setCommentList(commentList.concat(result.data.rows));
                setRowCount(result.data.count);
                setOffset(offset + LIMIT);
            }
        } catch(error) {
            console.log('error ::', error);
        }
    };

    const onClickMoreComments = () => {
        console.log('click more');
        setIsFetching(true);
    }

    return (
    <div className="comment-list-container">
        {
            commentList.map(commentItem => (
            <CommentItem
                key={`comment-${commentItem.post_no}-${commentItem.comment_no}-${commentItem.user_no}`}
                commentItem={commentItem}
            />
            ))
        }
        <div className="more-comments" onClick={onClickMoreComments}>View more comments</div>
    </div>
    )
};

export default CommentListContainer;