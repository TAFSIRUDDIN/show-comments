import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    let {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]); 
    const {id, title, body} = post;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])
    console.log(comments);
    return (
        <div>
            <h3>This is post detail {postId}</h3>
            <p>User posted {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <p>Number of comments: {comments.length}</p>
        </div>
    );
};

export default PostDetail;