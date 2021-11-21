import React, {useState, Component } from 'react'
import "./NavbarStyle.css";
import Axios from 'axios';



function LoginControl(){
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
  const [loginStatus, setloginStatus] = useState("");

  function moveS(){
    window.location.href = '/Signup';
  }
 
  const Login = () => {
    console.log("yes");
    console.log(usernameReg);
    console.log(passwordReg);
    Axios.post("http://localhost:3001/login/get", {
      Login_username: usernameReg,
      Login_password: passwordReg,
    }).then((response) => {
      console.log(response);
      console.log("itworks");
      if (response.data.message === 'ADMIN') {
        window.location.href = "./AWelcome";
      }else if(response.data.message){
        setloginStatus(response.data.message);
      } else {
        window.location.href = "./Welcome";
      }

    })
    .catch(function (error) {
      console.log(error);
      console.log("itdoesntworks");

    });  
  }    
  
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
         
          <button onClick= {Login}className="btn btn-success" >
            Login
          </button>
          <button onClick={moveS} className="btn btn-success" >
            Sign Up
          </button>
          
          
        </div>
      </div>
      <h3>{loginStatus}</h3>
    </div>
    );
  
}

export default LoginControl;
