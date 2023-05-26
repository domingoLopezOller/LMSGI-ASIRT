import React from 'react';
import './footer.css';
import { BsFacebook, BsTwitter, BsInstagram, BsSnapchat } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="#">
          <BsFacebook style={{ color: 'antiquewhite' }} 
                       onMouseOver={(e) => e.target.style.color = 'blue'}
                       onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="#">
          <BsTwitter style={{ color: 'antiquewhite' }} 
                      onMouseOver={(e) => e.target.style.color = 'aquamarine'}
                      onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="#">
          <BiWorld style={{ color: 'antiquewhite' }} 
                   onMouseOver={(e) => e.target.style.color = 'grey'}
                   onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="#">
          <BsInstagram style={{ color: 'antiquewhite' }} 
                       onMouseOver={(e) => e.target.style.color = 'pink'}
                       onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
        <a href="#">
          <BsSnapchat style={{ color: 'antiquewhite' }} 
                      onMouseOver={(e) => e.target.style.color = 'yellow'}
                      onMouseOut={(e) => e.target.style.color = 'antiquewhite'} />
        </a>
      </div>
    </footer>
  );
};