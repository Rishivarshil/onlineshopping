import React from 'react';
import './App.scss';
import Header from "./components/header";
import EMainContent from "./components/EmainContent";
import Footer from "./components/footer";
import NavBar from "./NavBar.js";

function Electronics() {
    return (
        <div className="container">
          <Header/>
          <NavBar/>
          <EMainContent/>
          <Footer/>
        </div>
    );
}

export default Electronics;