import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { AiFillCustomerService, AiFillSetting } from "react-icons/ai";
import {FaHome} from "react-icons/fa";
import { FcContacts, FcAbout } from "react-icons/fc";
import {AiOutlineInfoCircle} from "react-icons/ai";

export const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><a href="#home"> <p className="icono"><FaHome /></p> <p className="texto">Home</p></a></li>
        <li><a href="#news"><p className="icono"><AiFillSetting /></p> <p className="texto">Servicios</p></a></li>
        <li><a href="#contact"><p className="icono"><FcContacts/></p> <p className="texto">Contact</p></a></li>
        <li><a href="#soporte"><p className="icono"><AiFillCustomerService /></p> <p className="texto">Soporte</p></a></li>
        <li><a href="#about"><p className="icono"><AiOutlineInfoCircle /></p> <p className="texto">About</p></a></li>
      </ul>
    </nav>
    </>
  )
}