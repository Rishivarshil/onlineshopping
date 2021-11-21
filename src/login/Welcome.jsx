import React from 'react'
import "./NavbarStyle.css";
import Navbar from "./Navbar.jsx";



const boxStyle = {
  width: "500px",
  height: "500px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}
const boxStyle1 = {
  width: "500px",
  height: "200px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}



const Welcome = (props) => {
  const state = {
    // header
    header_h2__bold: "BLANK",
    header_title: ".",
    header_info: "Lorem Ipsum dolar...",
  
    // main
    main_title: "Login to our site",
    main_info: "Enter your username and password to log on"
  };

  if(
    0 != 0 //add admin functionality
  ){
      return(
       
          <div className="main_box">

            <Navbar
            header_h2__bold={state.header_h2__bold}
            header_title={state.header_title}
            header_info={state.header_info}
            main_title={state.main_title}
            main_info={state.main_info}
          />
            
          <h2 style={boxStyle1}>WELCOME {props.uName}</h2>
          <a href="/AOther" style={boxStyle}>Continue Admin</a>
        </div>
      )
  } else{
      return(
        <div className="main_box">

    
        
      <h2 style={boxStyle1}>WELCOME {props.uName}</h2>
      <a href="/Other" style={boxStyle1}>Continue</a>
    </div>
      )
  }
}


export default Welcome;