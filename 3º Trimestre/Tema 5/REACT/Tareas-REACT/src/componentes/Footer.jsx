import React from 'react'
import './Footer.css'
import {BsFacebook, BsTwitter} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/"><BsFacebook/> </a>  
        <a href="https://www.twitter.com/"><BsTwitter/> </a>
        <a href="http://instagram.es"><FaInstagramSquare/></a>
        <a href="http://youtube.es"><FaYoutubeSquare/></a>
      </div>
    </footer>
  )
}