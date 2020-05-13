import React from 'react';
import "../Stylies/post.css";

var posts = [
    {
        title: 'Blog post #1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Beni Naor',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Beni Naor',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Beni Naor',
        image: 'https://via.placeholder.com/90'
    },
    
];
function Post(props) {
    return (
        <div className="post-container">
            <div className="post">
                <label className="post-title">
                    {props.title}
                </label>
                <p className="post-content">
                    {props.content}
                </p>
                <img width="90" height="90" className="post-image" src={props.image}/>
                <label className="post-footer">
                    Published {props.published} by {props.author}
                </label>
            </div>
        </div>
    );
}
function Posts() {
    return posts.map(function(post) {
        return <Post
            title={post.title}
            content={post.content}
            image={post.image}
            published={post.published}
            author={post.author}
        />
    })
}
export default Posts;