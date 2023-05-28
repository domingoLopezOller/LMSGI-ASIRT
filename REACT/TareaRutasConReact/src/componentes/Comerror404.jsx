import React from 'react';
import error404 from '/Error404.jpg';
import './Comerror404.css';

export default function Comerror404() {
  return (
    <div className="error-container">
      <img src={error404} alt="Error 404" className="error-image" />
      <p className="error-message">
        Técnicamente algo ha fallado. La página a la que intentas acceder no existe. Si el problema persiste no dudes en
        ponerte en contacto con nosotros para solucionarlo.
      </p>
    </div>
  );
}