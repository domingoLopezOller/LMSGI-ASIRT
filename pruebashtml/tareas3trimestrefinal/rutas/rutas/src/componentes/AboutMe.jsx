import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AboutMe.css'
import "bootstrap/dist/css/bootstrap.min.css";

function AboutMe({color}) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <Card className={color} style={{ width: '18rem'}}>
      <Card.Img variant="top" src="/kevin.jpg" />
      <Card.Body>
        <Card.Title>Sobre Mí</Card.Title>
        <Card.Text>
          {mostrarTexto && <p>prueba para ver si el codigo de abajo funciona , joven con grandes metas.. como cualquier persona</p>}
        </Card.Text>
        <Button variant="primary" onClick={toggleTexto}>{mostrarTexto ? 'Menos' : 'Más'}</Button>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
