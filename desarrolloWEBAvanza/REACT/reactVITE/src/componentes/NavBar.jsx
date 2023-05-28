import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { FaHome, FaRegNewspaper, FaBlenderPhone, FaPeopleArrows } from "react-icons/fa";
export const NavBar = () => {
  return (
    <>
    <nav>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </nav>
  <nav>
    <ul>
        <li><a href='#home'><FaHome /> Home</a></li>
        <li><a href='#news'><FaRegNewspaper/> News</a></li>
        <li><a href='#contact'><FaBlenderPhone /> Contact</a></li>
        <li><a href='#about'><FaPeopleArrows/> About</a></li>
    </ul>
  </nav>
  </>
  )
}
