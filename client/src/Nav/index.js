import React, { useState } from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import './Nav.scss';

const loggedInNav = <Nav.Item className="mr-4">
  <Nav.Link href="/creator/dashboard/">Go to Dashboard</Nav.Link>
</Nav.Item>

const loggedOutNav = <Nav.Item className="mr-4">
  <Nav.Link href="/signup">Sign Up / Login as a Creator</Nav.Link>
</Nav.Item>

function SiteNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Navbar">
      <Navbar color="light" light expand="md">
        <Navbar.Brand href="/">LiveStack.video</Navbar.Brand>
        <Nav className="ml-auto" navbar>
          {isLoggedIn
            ? loggedInNav
            : loggedOutNav}
        </Nav>
      </Navbar>
    </div>
  );
}

export default SiteNav;

