import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function MyCard() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./pepo.jpg" />
          <Card.Body>
            <Card.Title>sobre mi:</Card.Title>
            <Card.Text>
              Soy un estudiante del Instituto IES Cura Valera al que vine a aprender un poco sobre varios temas de la informatica.
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default MyCard;