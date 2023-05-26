import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AboutMe.css'
import "bootstrap/dist/css/bootstrap.min.css";

function AboutMe({color}) {
  return (
    
    <Card className={color} style={{ width: '18rem'}}>
      <Card.Img variant="top" src="/FotoPersonal.png" />
      <Card.Body>
        <Card.Title>Sobre Mí</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ratione aliquid accusamus sunt neque, unde blanditiis, nostrum quam quia commodi numquam nisi eius pariatur qui beatae ad dicta cumque?
        </Card.Text>
        <Button variant="primary">Más</Button>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;