import React from 'react';
import './section.css';
import MyCard from './MyCard';

export const Section = () => {
  return (
    <section>
      <MyCard color="orange" imagen="./company.jpg" />
      <MyCard color="green" imagen="./services.jpg" />
      <MyCard color="blue" imagen="./clients.jpg" />
    </section>
  );
};
