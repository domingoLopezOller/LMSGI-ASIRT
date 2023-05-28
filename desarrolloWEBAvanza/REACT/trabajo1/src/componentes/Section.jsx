import React from 'react'
import './section.css'
import Mycard from './Mycard'

export const Section = () => {
  return (
    <section>
        <Mycard imagen="/lol.jpg" texto="LOL" color="naranja" parrafo="Para arruinarte la vida"/>
        <Mycard imagen="/valo.webp" texto="VALORANT" color="rojo" parrafo="Para arruinarte la vida Parte 2"/>
        <Mycard imagen="/TFT.jpg" texto="TFT" color="azul" parrafo="Relax"/>
    </section>
  )
}