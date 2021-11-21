import React from "react";
import "./test.scss";
import Navbar from "./login/Navbar.jsx";

class Test extends React.Component {
  state = {
    // header
    header_h2__bold: "BLANK",
    header_title: ".",
    header_info: "Lorem Ipsum dolar...",

    // main
    main_title: "Login to our site",
    main_info: "Enter your username and password to log on"
  };

  render() {
    const state = this.state;
    return (
      <div className="container mt-5">
        <Navbar
          header_h2__bold={state.header_h2__bold}
          header_title={state.header_title}
          header_info={state.header_info}
          main_title={state.main_title}
          main_info={state.main_info}
        />
      </div>
    );
  }
}

export default Test;
