import React from 'react';
import "../Stylies/posts.css"

function Post(post){
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <h5>This post has been published {post.published} by {post.author}</h5>
        </div>
    );
}

export default Post;