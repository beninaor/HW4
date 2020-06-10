import React from 'react';
import {BrowserRouter as Router, Switch,Link, Route} from 'react-router-dom';

import './Stylies/App.css';


import Header from './Components/Header';

import AboutMe from './hw4/AboutMe';
import Home from './hw4/Home';
import Login from './hw6/Login';
import NewPost from './hw4/NewPost';
import singlePost from './hw4/singlePost';
import signup from "./hw6/signup";
import Post from './hw4/Post';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "app-header">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/AboutMe" component={AboutMe}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/newPost" component={NewPost}/>
                        <Route exact path="/post/:id" component={singlePost}/>
                        <Route exact path="/signup" component={signup}/>

                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>
        );

    }
}

export default App;
