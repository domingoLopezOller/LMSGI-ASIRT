import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FcHome, FcSupport, FcBusinessContact, FcReadingEbook, FcManager} from "react-icons/fc";

export const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><a href="#home"> <p className="icono"><FcHome /></p> <p className="texto">Home</p></a></li>
        <li><a href="#news"><p className="icono"><FcReadingEbook /></p> <p className="texto">Servicios</p></a></li>
        <li><a href="#contact"><p className="icono"><FcBusinessContact/></p> <p className="texto">Contact</p></a></li>
        <li><a href="#soporte"><p className="icono"><FcSupport /></p> <p className="texto">Soporte</p></a></li>
        <li><a href="#about"><p className="icono"><FcManager /></p> <p className="texto">About</p></a></li>
      </ul>
    </nav>
    </>
  )
}