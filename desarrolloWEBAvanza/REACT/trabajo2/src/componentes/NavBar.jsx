import { NavLink } from 'react-router-dom';
import React from 'react'
import './navbar.css';

export default function NavBar () {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'><p>Curriculum</p></NavLink></li>
          <li><NavLink to='minfo'><p>Más</p></NavLink></li>
        </ul>
      </nav>
    )
  }