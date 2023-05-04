//Calcular la media del array
let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];

let sum=0;
for (let i=0; i<v.length; i++) {
    sum=sum+v[i];
}
let media=sum/v.length;
console.log(media);

//Simular la entrada de datos hasta recibir -1
let dato;
do {
    dato=prompt("Dame un numero: ");
}while (dato!=-1);