import React from 'react'
import "./Section.css";
import MyCard from './MyCard';
export const Section = () => {
  return (
    <section>
        <MyCard imagen="/terraria.jpg" titulo="Terraria" color="rojo"/>
        <MyCard imagen="/yo-pixelart.jpg" titulo="Juanfran" color="verde"/>
        <MyCard imagen="/poro.jpg" titulo="Poro" color="azul"/>
    </section>
  )
}
