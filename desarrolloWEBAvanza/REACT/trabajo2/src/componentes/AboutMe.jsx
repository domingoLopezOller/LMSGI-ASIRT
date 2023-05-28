import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './aboutme.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MiInfo({ color }) {
  return (
    <Container className="d-flex justify-content-center">
      <Card className={`about-me-card ${color}`} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/mimagen.jpg" />
        <Card.Body>
          <Card.Title>Llubi Ulinauskas</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ratione aliquid accusamus sunt neque, unde blanditiis, nostrum quam quia commodi numquam nisi eius pariatur qui beatae ad dicta cumque?
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MiInfo;