import React from 'react'
import {FaFacebookF} from "react-icons/fa";
export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        <p> Incluir iconos externos </p>
        <FaFacebookF />
    </div>
  )
}

export const RedesSociales2 = ({enlaces}) => {
  return (
    <div>
        for(let i=0;i<enlaces.length;i++ )
    </div>
  )
}