import React from 'react'
import fotoIES from "/headerIES.jpg";
import { FaFacebookSquare,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";

export const RedesSociales = () => {
    return (
      <div>
          <p> Incluir imágenes externas </p>
          <img src="../public/vite.svg" alt="logo de VITE" />
          <img src={fotoIES} alt="foto INSTITUTO CURA VALERA" />
  
  
          <p> Incluir iconos externos </p>
          <a href="https://www.instagram.com"><FaInstagram/></a>
          <a href="https://www.facebook.com"><FaFacebookSquare/></a>
          <a href="https://www.twitter.com"> <FaTwitter/></a>
          <a href="https://www.youtube.com"><FaYoutube/></a>
      </div>
    )
  }

  export const RedesSociales2 = (enlaces) => {
    let salida;
    for (let i=0;i<enlaces.length;i++){
        salida+= <a href={enlaces[i].url}><img src={enlaces[i].imagen}/></a>
    }
    return (
        salida
    )
  }