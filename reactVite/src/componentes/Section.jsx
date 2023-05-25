import React from 'react'
import './section.css'
import MiCard from './MiCard'



export const Section = () => {
  return (
    <section>
      <MiCard imagen ="/pepo.jpg" texto="Compañia" color="naranja" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia vitae eius suscipit repellat doloremque facere ratione tempore earum officiis ducimus inventore illo minus perferendis iure, quasi quis autem unde!" />
      <MiCard imagen ="/pepo.jpg" texto="Servicios" color="verde" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia vitae eius suscipit repellat doloremque facere ratione tempore earum officiis ducimus inventore illo minus perferendis iure, quasi quis autem unde!" />        
      <MiCard imagen ="/pepo.jpg" texto="Clientes" color="azul" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia vitae eius suscipit repellat doloremque facere ratione tempore earum officiis ducimus inventore illo minus perferendis iure, quasi quis autem unde!" />
    </section>
  )
}
