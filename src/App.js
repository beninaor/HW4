import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Stylies/App.css';


import Header from './Components/Header';

import AboutMe from './hw4/AboutMe';
import Home from './hw4/Home';
import Login from './hw4/Login';
import NewPost from './hw4/NewPost';
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
                        <Route exact path="/post/:id" component={Post}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>
        );

    }
}

export default App;
