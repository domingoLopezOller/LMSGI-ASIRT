import React from 'react'
import './IconosRedesSociales.css';
import LogoIesCuraValera from "/LogoIesCuraValera.jpg";
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";


const IconosRedesSociales = () => {
  return (
    <div>
      <p><strong>Actividad:</strong> Busca los iconos de las redes sociales y crea enlaces. Coloca el logo del instituto con su enlace correspondiente.</p>
      <div>
        <p>Incluir imágenes React</p>
        <p> Logo del instituto </p>
        <a href="https://www.iescuravalera.es"><img src={LogoIesCuraValera} alt="Logo del Instituto Cura Valera" /></a>
      </div>

      <div class="contenedorIconosRedes">
        <p> Incluir iconos Redes Sociales React </p>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://twitter.com/"><BsTwitter/></a>
        <a href="https://www.youtube.com/"><BsYoutube/></a>
        <a href="https://www.android.com/"><DiAndroid/></a>
      </div>
    </div>
  )
}

export default IconosRedesSociales