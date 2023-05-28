import { NavLink } from 'react-router-dom';
import React from 'react'
import './NavBar.css';

export default function NavBar () {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'><p>HOME</p></NavLink></li>
          <li><NavLink to='/redesSociales'><p>Actividad Redes Sociales</p></NavLink></li>
          <li><NavLink to='/carousel'><p>Actividad Carousel</p></NavLink></li>
          <li><NavLink to='sobremi'><p>ABOUT</p></NavLink></li>
        </ul>
      </nav>
    )
  }