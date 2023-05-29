import React from 'react';

export default function Comerror404() {
  const rutaImagen = '/imagen7.gif';

  return (
    <div>
      <img src={rutaImagen} alt="Error 404" />
      <p>Vuelva a colocar bien la dirección o vuelva al inicio.</p>
    </div>
  );
}
