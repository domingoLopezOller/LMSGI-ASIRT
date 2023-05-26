import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {
    return (
      <nav>
          <NavLink to='/'><p>Home</p></NavLink>
          <NavLink to='/redesSociales'><p>Actividad Redes Sociales</p></NavLink>
          <NavLink to='/carousel'><p>Actividad Carousel</p></NavLink>
          <NavLink to='/rutas'><p>Tarea Rutas</p></NavLink>
      </nav>
    )
  }