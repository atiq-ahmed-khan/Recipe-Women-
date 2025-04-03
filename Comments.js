import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ recipeId }) => {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`/api/comments/${recipeId}`);
            setComments(response.data);
        };
        fetchComments();
    }, [recipeId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const newComment = { content: commentInput, recipeId };
        await axios.post('/api/comments', newComment);
        setCommentInput('');
        // Re-fetch comments after submission
        const response = await axios.get(`/api/comments/${recipeId}`);
        setComments(response.data);
    };

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    required
                />
                <button type="submit">Submit Comment</button>
            </form>
            <div id="comment-list">
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
