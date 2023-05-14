import React from "react";

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'rat'];
    function getItemsList(){
    return ITEMS.map(item => <li>{item}</li>);
    }
    return (
    <ul>
    {getItemsList()}
    </ul>
    );
   }
   