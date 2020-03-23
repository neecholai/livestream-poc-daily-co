import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap';
import './Nav.scss';

const loggedInNav = <NavItem className="mr-4">
  <NavLink href="/creator/dashboard/">Go to Dashboard</NavLink>
</NavItem>

const loggedOutNav = <NavItem className="mr-4">
  <NavLink href="/signup">Sign Up / Login as a Creator</NavLink>
</NavItem>

function SiteNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Navbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LiveStack.video</NavbarBrand>
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

