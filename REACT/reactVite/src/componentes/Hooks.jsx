import React, { useState, useEffect,useRef,useReducer } from 'react';

// Ejemplo de evento en REACT
export function Form() {
  function handleSubmit(e) {
    e.preventDefault();    
    alert('You clicked submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}  

//Ejemplo que va a fallar 
let nombre = "Domingo López";
const cambiarNombre=(nuevoNombre) =>{ nombre=nuevoNombre; }

export const Cabecera = () => {
   return (
      <>
	<h1>Mi nombre es: {nombre}</h1>
	<button onClick={e => cambiarNombre("otro nombre")}>texto2</button>
      </>
   );
};
//Ejemplo de evento cambiar nombre con useState
export const CabeceraHook = () => {
    const [nombre,setNombre]=useState("Domingo López");
    const cambiarNombre=(nuevoNombre) =>{
      setNombre(nuevoNombre);
    }
    return (
      <>
          <h3>Mi nombre es: {nombre}</h3>
        <button onClick={e => cambiarNombre(prompt("Introduce el nuevo nombre"))}>Cambiar Nombre</button>
      </>
    );
  };

//Ejemplo evento contador con useEffect
export const EjemploContar  =() => {
    const [count, setCount] = useState(0);
    useEffect(() => {document.title = `You clicked ${count} times`;}),[count];
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  //Ejemplo evento con useRef para gestionar cambios en el mismo input
  export const Contador=() => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {document.title = `You clicked ${count} times`;count.current = count.current + 1;}),[count];
    // let [count, setCount] = useState(0);
    // useEffect(() => {document.title = `You clicked ${count} times`;}),[count];
    
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {setInputValue(e.target.value);}}
        //   onChange={(e) => {setInputValue(e.target.value);setCount(count++)}}
        />
        <p>You clicked {count.current} times</p>
        {/* <p>You clicked {count} times</p> */}
      </>
    );
  }

//Ejemplo de useReducer para gestionar eventos con el mismo Hook
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export const Counter=() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

