import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';
import { FcContacts } from 'react-icons/fc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
function NavBar() {
  return (
    <>
    <nav>
    <NavBar>
      <Container>
        <NavBar.Brand href="#home">Navbar with text</NavBar.Brand>
        <NavBar.Toggle />
        <NavBar.Collapse className="justify-content-end">
          <NavBar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </NavBar.Text>
        </NavBar.Collapse>
      </Container>
    </NavBar>
    <nav>
        <ul>
            <li><a href="#home"> <FaHome /> Home</a></li>
            <li><a href="#news"><BsNewspaper /> News</a></li>
            <li><a href="#contact"><FcContacts /> Contacts</a></li>
            <li><a href="#about"><AiOutlineInfoCircle /> Sobre mi</a></li>
        </ul>
    </nav>
    </nav>
    </>
  );

  
}

export default NavBart;


