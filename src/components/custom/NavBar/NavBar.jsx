import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ACMLogo from "./assets/acmlogo.png";

const NavbarLinkText = styled.span`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
`;

function NavBar() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={ACMLogo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="ACM logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">
              <NavbarLinkText>Home</NavbarLinkText>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavbarLinkText>About Us</NavbarLinkText>
            </Nav.Link>
            <Nav.Link href="#events">
              <NavbarLinkText>Events</NavbarLinkText>
            </Nav.Link>
            <Nav.Link href="#team">
              <NavbarLinkText>Team</NavbarLinkText>
            </Nav.Link>
            <Nav.Link href="#contact">
              <NavbarLinkText>Contact Us</NavbarLinkText>
            </Nav.Link> */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
