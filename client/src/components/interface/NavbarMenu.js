import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarMenu extends Component {
  render() {
    return (
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand>EventHood</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              <Link to="/eventi/">About</Link>
            </Nav>
          </Nav>

          <Nav className="ml-auto">
            <Button id="btnLogin" variant="light">
              <Link to="/login/">Login</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
