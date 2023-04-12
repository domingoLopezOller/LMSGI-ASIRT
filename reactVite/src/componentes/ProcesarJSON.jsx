import React from "react";
import data from "./heroes.json";

export const ArrayMedia = () => {
  let vector = [1, 2, 3, 4, 5];
  let media = 0;
  return (
    <>
      <h2>Mostrar vector y su media</h2>
      <p>
        Vector:
        {vector.map((dato) => {
          media += dato;
          return dato + ", ";
        })}
      </p>
      <p>{`Media del vector es: ${media / vector.length}`}</p>
    </>
  );
};

export const ProcesarJSONLista = () => {
  return (
    <ul>
      ProcesarJSON para sacar héroes Marvel
      {data.map((dato, index) => {
        if (dato.publisher == "Marvel Comics")
          return <li key={index}>{dato.superhero}</li>;
      })}
    </ul>
  );
};
export const ProcesarJSONTabla = () => {
  let contador = 0;
  return (
    <>
      <h3>ProcesarJSON para sacar héroes Marvel</h3>
      <table>
        <thead>
          <tr key={contador++}>
            <th>HÉROE</th>
            <th>COMIC</th>
            <th>Alter Ego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dato) => {
            if (dato.publisher == "Marvel Comics")
              return (
                <tr key={contador++}>
                  <td>{dato.superhero}</td>
                  <td>{dato.publisher}</td>
                  <td>{dato.alter_ego}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </>
  );
};


export default function ExtraerINFO(props) {
    if(props.tipo=="tabla"){
        return <ProcesarJSONTabla/>
    }
    else    return <ProcesarJSONLista />
}
