import React from 'react'
let contador=0;
export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'rat'];
    let contador=0;
    function getItemsList(){
        return ITEMS.map((item,index) => <li key={contador++}>{item}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}

export const TablaItems= () => {
    let ITEMS = ['cat', 'dog', 'rat'];
    let contador=0;
    function getItemsTR(){
        return ITEMS.map((item,index) => <tr key={contador++}><td>{item}</td></tr>);
    }
    return (
        <table>
            <tbody>
            {getItemsTR()}
            </tbody>
        </table>
    );
}

export default function ExtraerINFO(props) {
    if(props.tipo=="tabla"){
        return <TablaItems/>
    }
    else if (props.tipo=="lista"){
        return <ListarItems />
    }  
    else{
        return null;
    }
}

