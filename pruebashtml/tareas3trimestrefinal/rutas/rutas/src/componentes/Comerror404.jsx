import React from 'react'
import error404 from '/error404.gif';

export default function Comerror404 (){
    return (
    <div>
    <img src={error404} alt="Error 404" />
    <p>Es posible que el enlace que has seguido sea incorrecto o que se haya eliminado la página.</p>
    </div>
    );
}