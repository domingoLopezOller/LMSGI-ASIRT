import React from 'react'
import './curriculum.css'

export default function Curriculum (){
    return(
<div className="container">
      <h1 className="heading">Curriculum</h1>

      <div className="section">
        <h2 className="name">Llubi Ulinauskas Vorobjova</h2>
        <p className="contact-info">Arboleas La Cinta 643002871 llubiulinauskas600@gmail.com</p>
      </div>

      <div className="section">
        <h3 className="section-title">Últimos Estudios</h3>
        <ul>
          <li>
            <p>Fecha de inicio - Fecha de finalización: 18/09/2022-31/05/2023</p>
            <p className="description">Conocimientos añadidos: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fugit temporibus veritatis accusamus quo eligendi itaque distinctio ullam ab sequi doloremque atque ut! Assumenda nulla molestias unde accusantium illum quisquam!</p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Estudios Anteriores:</h3>
        <ul>
          <li>
            <h4 className="company-name">IES Cardenal Cisneros</h4>
            <p className="job-title">SMR</p>
            <p>Años cursados: 2 años</p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Idiomas</h3>
        <ul className="skills">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt eligendi expedita natus, amet quas. Culpa unde ducimus eius doloremque quasi suscipit est eos non, rem, deleniti dicta numquam quas?</li>
        </ul>
      </div>
    </div>
  );
};