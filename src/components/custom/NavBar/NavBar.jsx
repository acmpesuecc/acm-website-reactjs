import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ACMLogo from "./assets/acmlogo.png";
import ThemeToggleButton from "../ThemeToggleButton";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeContext";

// fix width of navbar buttons

// const NavbarLinkText = styled.span`
//   color: white;
//   font-size: 1.1rem;
//   font-weight: bold;
// `;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  line-height: 10vh;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: saturate(180%) blur(3px);
  display: flex;
  justify-content: space-evenly;
  z-index: 100;
`;
const NavbarName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  width: 40vw;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
const NavBarItem = styled.div`
  font-size: 1.2rem;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

function NavBar({ onNavClick }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <NavBarContainer>
      <NavbarName onClick={() => onNavClick(0)}>ACM PESU ECC</NavbarName>
      <NavBarItem onClick={() => onNavClick(1)}>Home</NavBarItem>
      <NavBarItem onClick={() => onNavClick(2)}>About us</NavBarItem>
      <NavBarItem onClick={() => onNavClick(3)}>Events</NavBarItem>
      <NavBarItem onClick={() => onNavClick(4)}>Team</NavBarItem>
      <NavBarItem onClick={() => onNavClick(5)}>Contact Us</NavBarItem>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </NavBarContainer>
  );
}

export default NavBar;

// <Navbar bg="dark">
// <Container>
//   <Navbar.Brand href="#home">
//     <img
//       src={ACMLogo}
//       width="60"
//       height="60"
//       className="d-inline-block align-top"
//       alt="ACM logo"
//     />
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="me-auto">
//       {/* <Nav.Link href="#home">
//         <NavbarLinkText>Home</NavbarLinkText>
//       </Nav.Link>
//       <Nav.Link href="#about">
//         <NavbarLinkText>About Us</NavbarLinkText>
//       </Nav.Link>
//       <Nav.Link href="#events">
//         <NavbarLinkText>Events</NavbarLinkText>
//       </Nav.Link>
//       <Nav.Link href="#team">
//         <NavbarLinkText>Team</NavbarLinkText>
//       </Nav.Link>
//       <Nav.Link href="#contact">
//         <NavbarLinkText>Contact Us</NavbarLinkText>
//       </Nav.Link> */}
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#about">About Us</Nav.Link>
//       <Nav.Link href="#events">Events</Nav.Link>
//       <Nav.Link href="#team">Team</Nav.Link>
//       <Nav.Link href="#contact">Contact Us</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Container>
// </Navbar>
