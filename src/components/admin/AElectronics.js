import React from 'react';
import '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/App.scss';
import Header from "../header";
import AEMainContent from "./AEmainContent";
import Footer from "../footer";
import NavBar from "./ANavBar.js";

function Electronics() {
    return (
        <div className="container">
          <Header/>
          <NavBar/>
          <AEMainContent/>
          <Footer/>
        </div>
    );
}

export default Electronics;