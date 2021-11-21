import React, {useState, Component } from 'react'
import "./NavbarStyle.css";
import Axios from 'axios';



function Signup() {
  const state = {
    // header
    header_h2__bold: "BLANK",
    header_title: ".",
    header_info: "Lorem Ipsum dolar...",
  
    // main
    main_title: "Login to our site",
    main_info: "Enter your username and password to log on"
  };

  const [usernameReg, setusernameReg]= useState("");
  const [passwordReg, setPasswordReg]= useState("");
  const submitLogin = () => {
    console.log("yes")
    window.location.href = '/LoginControl';
    Axios.post("http://localhost:3001/login/insert", {
      Login_username: usernameReg,
      Login_password: passwordReg,
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });  
  }    
  const [email, setEmail]= useState("");
  Axios.post("http://localhost:3001/user/insert", {
      User_name: usernameReg,
      User_email: email,
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });                          

    return (
    
      <div className="main_box">

      <div className="main_box--header">
        <h2><b>{state.header_h2__bold}</b> {state.header_title} </h2>
        <p>{state.header_info}</p>
      </div>

      <div className="main_box--main">
      <div className="main_box--main--title">
          <h4 align="center">{state.main_title}</h4>
          <p align="center">{state.main_info}</p>
        </div>
        <div className="main_box--main--login">
          <input onChange = {(e) => {
            setusernameReg(e.target.value); }}  
            align="center"
            type="text"
            id="username"
            className="form-control"
            placeholder="username"
            autoComplete="false"
          />
          <input onChange = {(e) => {
            setPasswordReg(e.target.value); }} align="center"
            type="password"
            id="password"
            className="
            form-control"
            placeholder="password"
          />
          <input align="center"
            type="password"
            id="password"
            className="
            form-control"
            placeholder="password"
          />
          <div>
           <input onChange = {(e) => {
            setEmail(e.target.value); }} align="center"
            type="Email Address"
            id="Email Address"
            className="
            form-control"
            placeholder="Email Address"
          />
          </div>
          <button className="btn btn-success" onClick={submitLogin} >
            SIGN UP
          </button>
          
          
        </div>
      </div>
    </div>
     
        
    )
  
}



export default Signup;