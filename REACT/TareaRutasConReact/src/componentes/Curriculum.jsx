import React from 'react'
import './Curriculum.css'

export default function Curriculum (){
    return(
<div className="container">
      <h1 className="heading">Curriculum Vitae</h1>

      <div className="section">
        <h2 className="name">Víctor Álvarez Fuentes</h2>
        <p className="contact-info">Calle Almería, 1, 04280, Almería | 6XXXXXXXX | victoralvarezinformatica@gmail.com</p>
      </div>

      <div className="section">
        <h3 className="section-title">Experiencia laboral</h3>
        <ul>
          <li>
            <h4 className="company-name">Cajamar</h4>
            <p className="job-title">Posición ocupada: XXXXX</p>
            <p>Fecha de inicio - Fecha de finalización: 15/05/2015-19/04/2017</p>
            <p className="description">Descripción de tus responsabilidades y logros en el puesto: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fugit temporibus veritatis accusamus quo eligendi itaque distinctio ullam ab sequi doloremque atque ut! Assumenda nulla molestias unde accusantium illum quisquam!</p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Educación</h3>
        <ul>
          <li>
            <h4 className="company-name">IES Cura Valera</h4>
            <p className="job-title">Título obtenido: ASIR</p>
            <p>Año de graduación: 2023</p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Habilidades</h3>
        <ul className="skills">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt eligendi expedita natus, amet quas. Culpa unde ducimus eius doloremque quasi suscipit est eos non, rem, deleniti dicta numquam quas?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt at qui rerum maxime quia soluta, odio pariatur, dolore ipsa assumenda aspernatur quae nihil distinctio vel exercitationem commodi quidem enim.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et eveniet autem repellendus dolore vel, qui exercitationem illum, sequi quia soluta, magnam quasi voluptate sed quo dolorem fugiat porro eos.</li>
        </ul>
      </div>
    </div>
  );
};
