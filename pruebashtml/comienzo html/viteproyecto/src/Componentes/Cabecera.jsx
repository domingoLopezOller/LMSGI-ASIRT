import React from 'react'

export const Cabecera = () => {
  return (
    <h1>Kevin Acuña Paredes</h1>
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


let suma= (a,b) => {return a+b;}
