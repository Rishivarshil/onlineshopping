import React from 'react';
import './App.scss';
import Header from "./components/header";
import OMainContent from "./components/OmainContent";
import Footer from "./components/footer";
import NavBar from "./NavBar.js";

function Electronics() {
    return (
        <div className="container">
          <Header/>
          <NavBar/>
          <OMainContent/>
          <Footer/>
        </div>
    );
}

export default Electronics;