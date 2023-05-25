import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mycard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({imagen,texto,color}) {
  return (
    
    <Card className={color} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{texto}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;