import React from 'react'
import './cabecera.css'


export const Cabecera = () => {
  return (
    <>
    <h1>Sasha Mykhaylov Krutkova</h1>
    </>
  )
}

// export const Cabecera = () => {
//   return (
//   <>
//   <h1 className="rojo">texto1</h1>
//   <h2 style={{color:red,font-size:18px}}>texto2</h2>
//   </>
//   );
//   };

export const Cabecera2 = ({mensaje="mensaje por defecto",otro}) => {
    return (
      <>
      <h2>{mensaje}</h2>
      <h2>{otro[3]}</h2>
      </>
    )
  }

  export const CabeceraEstilos = ({mensaje,color}) => {
    return (
      <>
      <h1 className={color}>{mensaje}</h1>
      </>
    )
  }


let suma= (a,b) => {return a+b;}