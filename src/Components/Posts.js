import React, {Component} from 'react';
import axios from 'axios';
import Post from "../hw4/Post";
import "../Stylies/posts.css";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            resp: false
        };
    }

    componentDidMount () {
        const url = "http://localhost:5000/posts"
        axios.get(url)
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    data: res.data,
                    resp: true
                });
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: false
                });
            });
    }


    render() {
        if (this.state) {
           const {data, resp} = this.state;
            console.log(resp)
            return (
                    <div>
                        {resp &&
                        data.map((post =>
                            <Post
                                title={post.title}
                                content={post.content}
                                published={post.published}
                                author={post.author}
                                imageurl={post.imageurl}
                            />))
                        }
                    </div>)
        }
    }
}



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

export default Posts;

