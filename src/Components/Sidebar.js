import React from 'react';
function Sidebar() {
    return (
        <aside className="home-sidebar">
            <label className="title"><h1>Latest</h1></label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog post #1 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #2 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #3 </span><a href="">here</a>
                </li>
            </ul>

            <hr/>
            <label className="title"><h1>Popular</h1></label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog post #1 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #2 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #3 </span><a href="">here</a>
                </li>
            </ul>
        </aside>
    );
}
export default Sidebar;