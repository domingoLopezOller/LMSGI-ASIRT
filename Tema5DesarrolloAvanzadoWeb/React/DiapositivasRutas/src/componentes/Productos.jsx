// import React from 'react'
// import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import './Productos.css'

export default function Productos ({nombre}){
let jsonData = JSON.parse('[{"name":"impresora","description":"Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner)."},{"name":"monitor","description":"En informática, un monitor, también llamado pantalla, monitor de ordenador y monitor de computadora, es el principal dispositivo de salida, que muestra datos o información a todos los usuarios. También puede considerarse un periférico de entrada/salida si el monitor contiene pantalla táctil o multitáctil."},{"name":"raton","description":"El ratón o mouse es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos. Detecta su movimiento relativo en dos dimensiones por la superficie plana en la que se apoya, reflejándose habitualmente a través de un puntero, cursor o flecha en el monitor."},{"name":"teclado","description":"En informática, un teclado es un dispositivo de entrada, en parte inspirado en el teclado de las máquinas de escribir, que utiliza un sistema de puntadas o márgenes, para que actúen como palancas mecánicas o interruptores electrónicos que envían toda la información a la computadora o al teléfono móvil. Presenta teclas alfanuméricas, de puntuación y teclas especiales."},{"name":"usb","description":"La memoria USB, conocida también con los nombres locales: lápiz de memoria, dedo, pincho, lápiz USB, memoria externa, pen drive, memocápsula, memorín o llave maya es un tipo de dispositivo de almacenamiento de datos que utiliza circuitos de estado sólido para guardar datos e información."}]');
let imagenes = [
    { imagen: "/productos/impresora.jpg", alt: "foto de Almería" },
    { imagen: "/productos/monitor.jpg", alt: "foto de Cádiz" },
    { imagen: "/productos/raton.jpg", alt: "foto de Córdoba" },
    { imagen: "/productos/teclado.png", alt: "foto de Granada" },
    { imagen: "/productos/usb.JPG", alt: "foto de Huelva" },
  ];
let imagen = '';
let texto = '';
let alt = '';
let i = 0;
while (i < 5) {
    if (nombre == jsonData[i].name){
        texto = jsonData[i].description;
        imagen = imagenes[i].imagen;
        alt = imagenes[i].imagen;
        i = 5;
    }
    ((i++));
}

return (
    <div>
    <img src={imagen} alt={alt} />
    <p> {texto} </p>
    </div>
    );
};