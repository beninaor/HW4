import React from 'react';
import MainSection from "../Components/MainSection";
import '../Stylies/Home.css';
import Sidebar from "../Components/Sidebar";

function Home(){
    return (
        <div>
            <div className="home-main">
                <div className="home-Section">
                    <MainSection/>
                </div>
                <div className="home-sidebar">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}
export default Home;