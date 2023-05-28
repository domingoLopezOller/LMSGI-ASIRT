let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];

//Media de los números de ese vector
console.log("Ejercicio Media");
let suma=0;
for(let i=0;i<v.length;i++){
    suma=suma+v[i];
}
let resultado=suma/v.length;
console.log (resultado);

//Bucle do-while para pedir opciones de un menú hasta la salida
console.log("Menu");
let dato;
do{
    dato=prompt("Introduce un numero o -1 para salir");
}while (dato!=-1);
