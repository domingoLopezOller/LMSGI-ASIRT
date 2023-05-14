import React from 'react'

export const Cabecera = () => {
  return (
    <h1>Sasha Mykhaylov Krutkova</h1>
  )
}

export const Cabecera2 = ({mensaje, otro}) => {
  return (
    <>
    <h2>{mensaje}</h2>
    <h2>{otro[2]}</h2>
    </>
  )
}

let suma= (a,b) => {return a+b;}