import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default class NavbarMenu extends Component {
  render() {
    return (
      <Navbar id="menu" bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="logo" width={400} height={100} align="middle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav>
              <Link className="text-white pages" to="/">
                Home
              </Link>
            </Nav>
            <div className="mx-2" />
            <Nav>
              <Link className="text-white pages" to="/eventi/">
                About
              </Link>
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
