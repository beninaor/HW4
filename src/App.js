import React from 'react';
import "./Stylies/App.css";

import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Sidebar from "./Components/sidebar";

function App() {
  return (
    <div className="header">
      <Header/>
     <div className="main">
        <div className="section">
         <MainSection/>
        </div>
        <div className="side">
          <Sidebar/>
        </div>
     </div>
    </div>
  );
}

export default App;

