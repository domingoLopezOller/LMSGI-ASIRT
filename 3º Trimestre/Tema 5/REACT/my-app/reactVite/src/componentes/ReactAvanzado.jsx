import React from 'react'
import {Cabecera, CabeceraHook, Form } from './Hooks'
import Rutas, { RutaOutlet, RutasMenu } from './Rutas'

export const ReactAvanzado = () => {
  return (
    <>
    <h1>React Avanzado: Gestion de eventos onClick</h1>
    {/* <Form/>
    <h2>Mi nombre es: </h2>
    <Cabecera/>
    <CabeceraHook/> */}
    <h2>Rutas en URL</h2>
    <Rutas/>
    <h2>Rutas con menu</h2>
    <RutasMenu/>

    <RutaOutlet/>
    </>
  )
}
