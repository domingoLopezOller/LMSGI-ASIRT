import React from 'react'
import './section.css'
import MyCard from './MyCard'

export const Section = () => {
  return (
    <section>
        <MyCard imagen ="/media/Almería.jpg" texto="Hola don Pepito" color="rojo"/>
        <MyCard imagen ="/media/Granada.jpeg" texto="Hola Granada" color="verde"/>
        <MyCard imagen ="/media/Málaga.jpg" texto="Hola Málaga" color="naranja"/>
        <MyCard imagen ="/media/Sevilla.jpg" texto="Hola Sevilla mi arma" color="azul"/>
    </section>
  )
}
