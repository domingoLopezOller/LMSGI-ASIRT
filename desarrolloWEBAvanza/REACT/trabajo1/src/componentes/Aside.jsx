import React from 'react'
import './aside.css'


export const Aside = () => {
  return (
    <aside>
    <h2>Juegos</h2>
    <p className='fecha'>LOL</p>
    <p className='texto'>League of Legends, es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games.</p>
    <p className='fecha'>VALO</p>
    <p className='texto'>Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. </p>
    <p className='fecha'>TFT</p>
    <p className='texto'>Teamfight Tactics es un videojuego auto battler desarrollado y publicado por Riot Games.</p>
    </aside>
  )
}