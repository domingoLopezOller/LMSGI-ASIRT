import "bootstrap/dist/css/bootstrap.min.css";
import './productos.css'

export default function Productos ({nombre}){
let jsonData = JSON.parse('[{"name":"raton","description":"El ratón o mouse (en inglés pronunciado /maʊs/) es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos."},{"name":"pantalla","description":"El monitor del computador, también conocido como pantalla, muestra la información de tu equipo como imágenes y textos, que son generados gracias a una tarjeta de video que se encuentra en el interior de la torre del computador."},{"name":"teclado","description":"El teclado es un dispositivo de entrada que utiliza una disposición de teclas, para que actúen como interruptores electrónicos que envían información a la computadora. El teclado tiene entre 99 y 108 teclas; y, está dividido en cuatro bloques: de funciones, alfanumérico, especial y numérico."},{"name":"caja","description":"Se trata de una extensión de espacio en la estructura de un monitor CRT o de una pantalla LCD, en la cual se alojan los diversos dispositivos funcionales del equipo de cómputo: placa base, disco duro, unidad de disco óptica, fuente de alimentación, ventiladores internos, etc."},{"name":"usb","description":"USB (bus serie universal) fue desarrollado por la industria de PC para proporcionar una solución de bajo costo para conectar dispositivos periféricos, como teclados, dispositivos de mouse e impresoras a un sistema. Los conectores USB están diseñados para conectarse con un tipo de cable, de una sola manera."}]');

let imagenes = [
    { imagen: "/productos/raton.jpg", alt: "Foto de un raton" },
    { imagen: "/productos/pantalla.jpg", alt: "Foto de una pantalla" },
    { imagen: "/productos/teclado.jpg", alt: "Foto de un teclado" },
    { imagen: "/productos/caja.jpg", alt: "Foto de una caja" },
    { imagen: "/productos/USB.jpg", alt: "Foto de un USB" },
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
    <div className="productos-container">
      <img src={imagen} alt={alt} className="productos-image" />
      <p className="productos-description">{texto}</p>
    </div>
    );
};