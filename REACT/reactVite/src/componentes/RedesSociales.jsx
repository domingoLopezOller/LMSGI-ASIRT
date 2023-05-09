import React from 'react'
import fotoIES from "/headerIES.jpg";
import {FaFacebookF} from "react-icons/fa";
export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        <img src={fotoIES} alt="foto INSTITUTO CURA VALERA" />


        <p> Incluir iconos externos </p>
        <FaFacebookF />
    </div>
  )
}
