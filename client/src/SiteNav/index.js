import React, { useState } from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import './SiteNav.scss';

const loggedInNav = <Nav.Link to="/creator/dashboard/">Go to Dashboard</Nav.Link>

const loggedOutNav = <Nav.Link to="/signup">Sign Up/Login as a Creator</Nav.Link>

function SiteNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Navbar">
      <Navbar color="light" expand="false">
        <Navbar.Brand className="logo">
          <Nav.Link to="/">LiveStack</Nav.Link>
        </Navbar.Brand>
        <Nav navbar >
          {isLoggedIn ? loggedInNav : loggedOutNav}
        </Nav>
      </Navbar>
    </div>
  );
}

export default SiteNav;

