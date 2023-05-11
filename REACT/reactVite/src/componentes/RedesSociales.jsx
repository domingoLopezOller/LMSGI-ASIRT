import React from 'react'
import fotoIES from "/headerIES.jpg";
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";


export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        <a href="https://www.iescuravalera.es"><img src={fotoIES} alt="foto INSTITUTO CURA VALERA" /></a>


        <p> Incluir iconos externos </p>
       <FaFacebookSquare/> 
       <a href="https://www.instagram.com/"><FaInstagram/></a> <DiAndroid/>
    </div>
  )
}



export const RedesSociales2 = ({enlaces}) => {
  let salida="";
  return (
    <>
      <a href={enlaces[0].url}><img src={enlaces[0].imagen} /></a>
      <a href={enlaces[1].url}><img src={enlaces[1].imagen} /></a>
    </>
  )
}
