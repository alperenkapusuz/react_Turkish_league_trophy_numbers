import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./Navi.css";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/mainmenu" className="navbarbrand">Türkiye Futbol Müzesi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar  className="mr-auto">
          <Nav  navbar className="nav">
            <NavItem >
              <NavLink href="/leaguecup/" className="navlink">Lig Kupası</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/ziraatcup/" className="navlink">Ziraat Kupası</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/supercup/" className="navlink">Süper Kupa</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;