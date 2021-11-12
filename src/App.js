import React from 'react';
import './App.scss';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import NavBar from "./NavBar.js";
import Watches from "./Watches.js";

function App() {
    return (
        
        <div className="container">
          <Watches/>
        </div>
        
    );
}

export default App;