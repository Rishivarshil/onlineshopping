import React from 'react';
import './NavBar.scss';

const Navbar = () => {
  return (
    <>
      <div class = "body"> 
          <a href="/Watches" class="Link">Watches</a>
          <div class = "link">
          <a href="/Electronics">Electronics</a>
          </div>
          <div class = "link">
          <a href="/Other">Other</a>
          </div>
      </div>
    </>
  );
};

export default Navbar;