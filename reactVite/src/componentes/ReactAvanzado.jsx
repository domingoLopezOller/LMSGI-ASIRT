import React from 'react'
import { Cabecera, CabeceraHook, Contador, Counter, EjemploContar, Form } from './Hooks'
// import { Pokemon2 } from './Pokemon'
import Rutas, { RutaOutlet, RutasConError, RutasMenu } from './Rutas'

export const ReactAvanzado = () => {
  return (
    <>
    {/* <h1> React AVANZADO: Gestión de eventos onClick </h1>
    <Form/>
    
    <h1> React AVANZADO: Gestión de Hooks </h1>
    <h2> Caso de usar UseState </h2>
    <Cabecera/>
    <CabeceraHook />

    <h2>Caso de usar UseEffect</h2>
    <EjemploContar/>
    <Pokemon2 id={6}/>

    <h2>Caso de usar UseRef</h2>
    <Contador/>

    <h2>Caso de usar UseReducer</h2>
    <Counter/> */}


    <h1> React AVANZADO: gestión de rutas</h1>
    <h2>Rutas en URL</h2>
    {/* <Rutas/> */}
    <RutaOutlet />
    {/* <h2>Rutas con error 404 y entrada variable de parámetros en URL</h2>
    <RutasConError/>
    <h2>Rutas con menú nav</h2>
    <RutasMenu/> */}
    </>
  )
}