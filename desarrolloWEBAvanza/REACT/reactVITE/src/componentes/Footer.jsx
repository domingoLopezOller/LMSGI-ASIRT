import React from 'react'
import './footer.css'
import {FaInstagram, FaFacebookF, FaTwitterSquare} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
        <a href='#'><FaFacebookF/></a>
        <a href='#'><FaInstagram/></a>
        <a href='#'><FaTwitterSquare/></a>
    </footer>
  )
}
