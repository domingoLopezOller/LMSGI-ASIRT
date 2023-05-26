import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar () {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'><p>Home</p></NavLink></li>
          <li><NavLink to='/redesSociales'><p>Actividad Redes Sociales</p></NavLink></li>
          <li><NavLink to='/carousel'><p>Actividad Carousel</p></NavLink></li>
          <li><NavLink to='#'><p>Curriculum</p></NavLink>
            <ul>
              <li><NavLink to='/curriculum/sobreMi'><p>Sobre Mí</p></NavLink></li>
              <li><NavLink to='/curriculum/aptitudes'><p>Aptitudes</p></NavLink></li>
              <li><NavLink to='/curriculum/formacionAcademica'><p>Fomración Académica</p></NavLink></li>
              <li><NavLink to='/curriculum/formacionLaboral'><p>Formación Laboral</p></NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }