import React from 'react';
import '/Users/rishivarshilnelakurti/website/client/onlineshopping/src/NavBar.scss';

const Navbar = () => {
  return (
    <>
      <div class = "body"> 
          <a href="/AWatches" class="Link">Watches</a>
          <div class = "link">
          <a href="/AElectronics">Electronics</a>
          </div>
          <div class = "link">
          <a href="/AOther">Other</a>
          </div>
      </div>
    </>
  );
};

export default Navbar;