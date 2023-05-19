import React from 'react';
import './cabecera.css'

export const Cabecera = () => {
  return (
    <h1>Domingo López Oller</h1>
  )
}


export const Cabecera2 = ({mensaje="mensaje por defecto",otro}) => {
    return (
      <>
      <h2>{mensaje}</h2>
      <h2>{otro[3]}</h2>
      </>
    )
  }



export const CabeceraEstilos= ({mensaje,color}) => {
    return (
      <>
      <h1 className={color}>{mensaje}</h1>
      </>
    )
  }
  
  
