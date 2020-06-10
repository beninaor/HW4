import React, {Component} from 'react';
// import posts from '../Components/SetPostes';
import {useParams} from 'react-router-dom';
import "../Stylies/posts.css"
import axios from 'axios';
import posts from "../Components/Posts";

class singlePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            data: [],
            resp: false
        };
    }
    componentDidMount () {
        var {id} = this.state
        const url = "http://localhost:5000/post/" + id
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data,
                    resp: true
                });
                console.log("res.data  = " +res)
            })
            .catch((err) => {
                this.setState({
                    data: [],
                    resp: false
                });
                console.log(err)
            });
    }

    render() {
        if (this.state) {
           var {title, content, published, author, imageUrl} = this.state.data
            return (
                <div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <h5>This post has been published {published} by {author}</h5>
                </div>
            );
        }
    }
}
export default singlePost;