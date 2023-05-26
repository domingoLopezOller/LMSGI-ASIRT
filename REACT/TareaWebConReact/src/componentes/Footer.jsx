import React from 'react';
import './footer.css';
import { BsFacebook, BsTwitter, BsInstagram, BsSnapchat } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/" target='_blank'>
          <BsFacebook style={{ color: 'antiquewhite' }} 
                       onMouseOver={(e) => e.target.style.color = 'blue'}
                       onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="https://twitter.com/" target='_blank'>
          <BsTwitter style={{ color: 'antiquewhite' }} 
                      onMouseOver={(e) => e.target.style.color = 'aquamarine'}
                      onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="https://es.wikipedia.org/wiki/Hola_mundo" target='_blank'>
          <BiWorld style={{ color: 'antiquewhite' }} 
                   onMouseOver={(e) => e.target.style.color = 'grey'}
                   onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
          <BsInstagram style={{ color: 'antiquewhite' }} 
                       onMouseOver={(e) => e.target.style.color = 'pink'}
                       onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="https://www.snapchat.com/es" target='_blank'>
          <BsSnapchat style={{ color: 'antiquewhite' }} 
                      onMouseOver={(e) => e.target.style.color = 'yellow'}
                      onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
      </div>
    </footer>
  );
};