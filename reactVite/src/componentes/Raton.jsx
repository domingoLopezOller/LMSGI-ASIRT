import React from 'react'
import "./productos.css"

export const Raton = () => {
  return (
    <>
    <div>
        <table border="2" className='borde'>
            <thead></thead>
            <tbody>
            <tr>
                <td><p>El ratón o mouse (en inglés pronunciado /maʊs/) es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos. Detecta su movimiento relativo en dos dimensiones por la superficie plana en la que se apoya, reflejándose habitualmente a través de un puntero, cursor o flecha en el monitor. El ratón se puede conectar de forma cableada (puertos PS/2 y USB), o inalámbricamente por medio de un adaptador USB que se conecta a la computadora y esta recibe la señal del ratón, aunque también pueden ser por medio de conectividad infrarroja o Bluetooth.
   </p></td>
                <td><img src="./raton.jpg" alt="raton (informatica)" /></td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
        
    </div>
    </>
  )
}
