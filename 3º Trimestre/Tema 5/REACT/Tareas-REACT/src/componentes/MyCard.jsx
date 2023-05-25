import React from "react";
import Card from 'react-bootstrap/Card';
import './mycard.css';
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({imagen,titulo,color}) {
  return (
    
    <Card className={color} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Terraria is a game similar to minecraft but in 2D, however its dificult
          is extrem copare with this game. If you like the extreme games and the pixelarnt
          you would probe this game.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;