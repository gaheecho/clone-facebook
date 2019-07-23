import React, { useState, useEffect } from 'react';
import PostList from 'components/post-list';
import axios from 'axios';

const Timeline = () => {
    const LIMIT = 10;
    const [rowCount, setRowCount] = useState(0);
    const [postList, setPostList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    

    useEffect(() => {
        window.addEventListener('wheel', onScroll);
        setIsFetching(true);
        return () => {
            window.removeEventListener('wheel', onScroll)
        }
    }, []);

    useEffect(() => {
        console.log('---- * useEffect * ----');
        console.log(isFetching, offset, postList.length, rowCount);
        if(isFetching && (rowCount < 1 || postList.length < rowCount)) {
            requestPostList();
        }
        return () => {
            setIsFetching(false);
        }
    }, [isFetching, offset, postList, rowCount]);

    const onScroll = () => {
        console.log('---- * onScroll * ----');
        console.log(isFetching, offset, postList.length, rowCount)
        const getScrollBottom = () => document.body.scrollHeight - document.body.clientHeight === document.body.scrollTop;
        if(getScrollBottom()) {
            setIsFetching(true);
        }
    };

    const requestPostList = async () =>{
        try {
            const result = await axios.get(`http://localhost:4000/api/posts?limit=${LIMIT}&offset=${offset}`);
            if(result) {
                setPostList(postList.concat(result.data.rows));
                setRowCount(result.data.count);
                setOffset(offset + LIMIT);
            }
            
        } catch(error) {
            setIsFetching(false);
            setPostList([]);
            setRowCount(0);
            setOffset(0);
            console.log('error ::', error);
        }
        
    }
    return (
        <PostList postList={postList}/>
    )
}

export default Timeline;
