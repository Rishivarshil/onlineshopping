import React from 'react';
import LoginControl from "./LoginControl";
import "./NavbarStyle.css";


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const {header_h2__bold, header_title, header_info, main_title, main_info} = this.props;
    return (
      <div className="main_box">

        <div className="main_box--header">
          <h2><b>{header_h2__bold}</b> {header_title} </h2>
          <p>{header_info}</p>
        </div>

        <div className="main_box--main">
        <div className="main_box--main--title">
            <h4 align="center">{main_title}</h4>
            <p align="center">{main_info}</p>
          </div>
          <div className="main_box--main--login">
            <input  align="center"
              type="text"
              id="username"
              className="form-control"
              placeholder="username"
              autoComplete="false"
            />
            <input align="center"
              type="password"
              id="password"
              className="
              form-control"
              placeholder="password"
            />
            <input align="center"
              type="comfirm password"
              id="comfirm password"
              className="
              form-control"
              placeholder="password"
            />
            <button className="btn btn-success" onClick={window.location.href='./Signup'}>
              SIGN UP
            </button>
            
            
          </div>
        </div>
      </div>
    )
  }
} 

export default Navbar;