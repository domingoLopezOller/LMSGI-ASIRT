import React from "react";
import Card from 'react-bootstrap/Card';
import './MyCard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({color},{titulo}) {
  let imagenes = [
    { color: "verde", imagen: "/services.jpg", title: "services" },
    { color: "azul", imagen: "/clients.jpg", title: "clients" },
    { color: "naranja", imagen: "/company.jpg", title: "company" },
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
  
    <Card class="rounded-left" className={color} style={{ width: '18rem'}}>
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