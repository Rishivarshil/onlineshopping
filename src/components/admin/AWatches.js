import React from 'react';
import '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/App.scss';
import Header from "../header";
import AWMainContent from "./AWmainContent";
import Footer from "../footer";
import NavBar from "./ANavBar.js";
function AWatches() {
    return (
        
        <div className="container">
          <Header/>
          <NavBar/>
          <AWMainContent/>
          <Footer/>
        </div>
        
    );
}

export default AWatches;