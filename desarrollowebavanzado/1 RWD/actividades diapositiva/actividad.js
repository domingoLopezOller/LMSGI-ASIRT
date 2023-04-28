//calcular la media de los números de ese vector

let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
let suma=0
//bucle for
for (let i=0;i<v.length;i++){
    suma=suma+v[i];
}
let resultado=suma/v.length;
console.log(resultado);

//BUCLE DO-WHILE
let dato;
 do{
    dato=prompt("Introduce un numero o -1 para salir")
 }while(dato!=-1)