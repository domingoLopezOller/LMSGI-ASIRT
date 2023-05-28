import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs";


export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/"><BsFacebook/> </a>  
        <a href="https://twitter.com"><BsTwitter/> </a>
        <a href="https://www.instagram.com/llubi_uli/"><BsInstagram /> </a>
      </div>
    </footer>
  )
}