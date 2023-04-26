//Calcular la media de un array
let v=[3, 3, 3,3, 3, 3];
let suma=0;
for(let i=0;i<v.length;i++){
    suma=suma+v[i];
}
let resultado=suma/v.length;
console.log(resultado)

//Simular la entrada de datos hasta recibir -1
let dato;
do{
    dato=prompt("Introduce un número o -1 para salir");
}while(dato!=-1);