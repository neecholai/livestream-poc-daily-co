import React, { useState } from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import './Nav.scss';

const loggedInNav = <Nav.Item>
  <Nav.Link href="/creator/dashboard/">Go to Dashboard</Nav.Link>
</Nav.Item>

const loggedOutNav = <Nav.Item>
  <Nav.Link href="/signup">Sign Up/Login as a Creator</Nav.Link>
</Nav.Item>

function SiteNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="Navbar">
      <Navbar color="light" light expand="false">
        <Navbar.Brand className="logo" href="/">LiveStack</Navbar.Brand>
        <Nav navbar >
          {isLoggedIn
            ? loggedInNav
            : loggedOutNav}
        </Nav>
      </Navbar>
    </div>
  );
}

export default SiteNav;

