import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function () {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React Workshop</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/orders">
            <NavItem eventKey={1}>Orders</NavItem>
          </LinkContainer>
          <LinkContainer to="/ordersap">
            <NavItem eventKey={1}>Ordersap</NavItem>
          </LinkContainer>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
