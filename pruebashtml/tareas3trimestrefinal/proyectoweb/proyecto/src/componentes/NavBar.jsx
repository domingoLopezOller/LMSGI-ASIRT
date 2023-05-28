import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import {FaHome} from "react-icons/fa";
// import { FcContacts, FcAbout } from "react-icons/fc";
// import { BsNewspaper } from "react-icons/bs";
// import {AiOutlineInfoCircle} from "react-icons/ai";

const NavBar = () => {
  return (
    <>
    <nav>  
        <ul>
            <li><span className="inicio"><a href="#"><i className="fa-solid fa-house"></i><p>Home</p></a></span></li>
            <li><span className="blog"><a href="#"><i className="fa-solid fa-building"></i><p>Company</p></a></span></li>
            <li><span className="sobremi"><a href="#"><i className="fa-brands fa-servicestack"></i><p>Services</p></a></span></li>
            <li><span className="fotos"><a href="#"><i className="fa-solid fa-film"></i><p>Showcase</p></a></span></li>
            <li><span className="portfolio"><a href="#"><i className="fa-solid fa-headset"></i><p>Support</p></a></span></li>
            <li><span className="contacto"><a href="#"><i className="fa-solid fa-user-secret"></i><p>Privacy</p></a></span></li>
            <li><span className="enlaces"><a href="#"><i className="fa-solid fa-address-book"></i><p>Contact</p></a></span></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar;