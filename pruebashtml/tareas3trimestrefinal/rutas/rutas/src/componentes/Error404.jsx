import React from 'react'
import error404 from '/error404.gif';

export default function Comerror404 (){
    return (
    <div>
    <img src={error404} alt="Error 404" />
    <p>vuelva a colocar bien la dirrecion o vuelva al inicio.</p>
    </div>
    );
}