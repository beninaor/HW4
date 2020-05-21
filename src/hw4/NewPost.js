import React from 'react';
import '../Stylies/NewPost.css';

function NewPost() {

    return (
        <div>
            <h2>Create New Post</h2>
            <input className={'title'} type={'text'} placeholder={"Enter the title of your post"} name={'title'} required/><br/>
            <textarea className={'text'} placeholder="post Content goes here" required/><br/>
            <button className="button" type="submit"  > save post</button>
        </div>
    );
}

export default NewPost;
