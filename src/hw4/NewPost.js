import React from 'react';
import axios from 'axios';
import '../Stylies/NewPost.css';


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id : null,
            title: null,
            content: null,
            published: null,
            author : null,
            imageurl :'https://via.placeholder.com/90',
            resp: null
        };
    }

    EditTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }
    EditContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    }

    EditPublished = (e) => {
        this.setState({
            published: e.target.value,
        });
    }
    EditAuthor = (e) => {
        this.setState({
            author: e.target.value,
        });
    }



    addPost = (e) => {
        const url = "http://localhost:5000/posts";
        const data = {
            title: this.state.title,
            content: this.state.content,
            published:this.state.published,
            author:this.state.author,
            imageurl: this.state.imageurl
        }
        axios.post(url, data)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    this.setState({
                        data: [res.data],
                        resp: "Success: user add post.",
                        gotPostData: true,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: "Error: failed to add post."
                });
            });
    }



    getAllPosts = (e) => {
        const url = "http://localhost:5000/posts"
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data,
                    resp: null,
                    gotPostData: true
                });

            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: "Error: failed to get all posts.",
                    otPostData: false
                });
            });
    }

    render() {
        const { data, gotPostData } = this.state;
        return (
            <div>
                <h2>Create New Post</h2>
                <div>
                    title: <input type="text" onChange={this.EditTitle} placeholder={"Enter title"} required></input><br/>
                    content: <input type="text" onChange={this.EditContent} placeholder="Enter post" required></input><br/>
                    published: <input type="text" onChange={this.EditPublished} placeholder="Enter post" required></input><br/>
                    author: <input type="text" onChange={this.EditAuthor} placeholder="Enter name" required></input><br/>
                </div>
                <button onClick={this.addPost}>add Post</button><br/>
                <div>
                    <button onClick={this.getAllPosts}>Get All Posts</button><br/>
                </div>

                <div>
                    {this.state.resp?this.state.resp:null}
                </div>
                <div>
                    { gotPostData &&
                        data.map((item =>
                            <div>
                                ID: {item.id}, title: {item.title}, content: {item.content}, author: {item.author} ,published: {item.published} ,imageurl:{item.imageurl }
                            </div>))
                    }
                </div>

            </div>
        );
    }
}
export default NewPost;

// function my_post(props) {
//     return (
//         <div className="post-container">
//             <div className="post">
//                 <label className="post-title">
//                     {props.title}
//                 </label>
//                 <p className="post-content">
//                     {props.content}
//                 </p>
//                 <img width="90" height="90" className="post-image" src={props.image}/>
//                 <label className="post-footer">
//                     Published {props.published} by {props.author}
//                 </label>
//             </div>
//         </div>
//     );
// }



















// function NewPost() {
//
//     return (
//         <div>
//             <h2>Create New Post</h2>
//             <input className={'title'} type={'text'} placeholder={"Enter the title of your post"} name={'title'} required/><br/>
//             <textarea className={'text'} placeholder="post Content goes here" required/><br/>
//             <button className="button" type="submit"  > save post</button>
//         </div>
//     );
// }
// export default NewPost;
