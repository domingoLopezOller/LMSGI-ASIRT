import React from 'react';
import error404 from '/error.jpg';
import './error.css';

export default function error() {
  return (
    <div className="error-container">
      <img src={error404} alt="Error 404" className="error-image" />
      <p className="error-message">
        La página que estás buscando no existe
      </p>
    </div>
  );
}