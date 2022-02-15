// import logo from './logo.svg';
// import react from 'react';
// import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  return (
      <>
      <nav className="nav">
       
        <div className="elements">
        {/* <Link to="/">Home</Link> */}
          <div className="elem">
              Resume
          </div>
         

          <div className="elem">
              Portfolio
          </div>
        
          <div className="elem">
              Socials
          </div>

          <div className="elem contact-elem">
              Contacts
          </div>


        </div>

  
      </nav>
      </>
    
  );
}

export default Navbar;
