import React from 'react';
import './App.scss';
import Header from "./components/header";
import WMainContent from "./components/mainContent";
import Footer from "./components/footer";
import NavBar from "./NavBar.js";

function Watches() {
    return (
        
        <div className="container">
          <Header/>
          <NavBar/>
          <WMainContent/>
          <Footer/>
        </div>
        
    );
}

export default Watches;