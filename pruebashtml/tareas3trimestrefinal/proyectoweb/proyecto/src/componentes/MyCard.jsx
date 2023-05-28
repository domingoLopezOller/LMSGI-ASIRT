import React from "react";
import Card from 'react-bootstrap/Card';
import './MyCard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({color},{titulo}) {
  let imagenes = [
    { color: "verde", imagen: "/imagen2.jpg", title: "SERVICES" },
    { color: "azul", imagen: "/imagen1.jpg", title: "CLIENTS" },
    { color: "naranja", imagen: "/imagen3.jpg", title: "COMPANY" },
  ];

let title;
let imagen = '';
let i = 0;
while (i < 3) {
    if (color == imagenes[i].color){
        imagen = imagenes[i].imagen;
        title = imagenes[i].title;
        i = 3;
    }
    ((i++));
}

  return (
  
    <Card className={color} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore pariatur sunt maiores nemo iste quo impedit iure minus suscipit quas quibusdam, sed sapiente ipsa autem laborum quod temporibus illum!
        </Card.Text>
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  );
}

export default MyCard;