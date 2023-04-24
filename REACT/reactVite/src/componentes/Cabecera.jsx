import React from "react";
import PropTypes from 'prop-types'
import { FaAdn } from 'react-icons/fa';
import viteLogo from '/vite.svg'

export const Cabecera = () => {
  return (
    <>
      <h1>texto1</h1>
      <h2>Quieres una <FaAdn />?</h2>
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </>
  );
};

export const Cabecera2 = (props) => {
    return (
      <>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </>
    );
  };

  export const CabeceraSocial3 = ({title="hola caracola",subtitle}) => {
    return (
      <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </>
    );
  };

export const NotificationCard = ({ message, type, id }) => { 
  return <span>Notification</span>
}

NotificationCard.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "warning", "success"]),
  id: PropTypes.number.isRequired
}


export const ListarItems= () => {
    let ITEMS = [{id:1,pet:'cat'},{id:2,pet:'dog'},{id:3,pet:'bird'}];
    function getItemsList(){
        return ITEMS.map(item => <li key={item.id}>{item.pet}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}