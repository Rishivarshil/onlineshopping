import React from 'react';
import '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/App.scss';
import Header from "../header";
import AOMainContent from "./AOmainContent";
import Footer from "../footer";
import NavBar from "./ANavBar.js";

function AOther() {
    return (
        <div className="container">
          <Header/>
          <NavBar/>
          <AOMainContent/>
          <Footer/>
        </div>
    );
}

export default AOther;