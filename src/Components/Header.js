import React from "react";
import "../Stylies/Header.css";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="header-links">
                <div>
                    <span className="header-link"> </span>
                    <Link to="/"> Home </Link>
                    <span className="header-link"> | </span>
                    <Link to="/AboutMe"> About Me </Link>
                    <span className="header-link"> | </span>
                    <Link to="/newPost"> New Post </Link>
                </div>
                <Link to="/Login" className="header-link-login">Login </Link>
                <Link to="/signup" className="header-link-login">signup </Link>

            </div>
        </header>
    );
}
export default Header;





































































































































































































































































































