import React from 'react'
import fotoIES from '/headerIES.jpg'
import { FaLinkedinIn } from "react-icons/fa";

function RedesSociales() {
  return (
    <div>
        <p>Incluir imagenes externas</p>
        <img src="../public/vite.svg" alt="Logo de vite" />
        <img src="../../public/headerIES.jpg" alt="insti" />

  
        <p> Incluir iconos externos </p>
       <a href="https://www.linkedin.com/home?original_referer=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"> <FaLinkedinIn /></a>
    </div>
  )
   
}

export const RedesSociales2 = ({enlaces}) => {
  let salida
return(
<>
  <a href={enlaces[0].url}><img src={enlaces[0]} /></a>
</>
)


}

export default RedesSociales