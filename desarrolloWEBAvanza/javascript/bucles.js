// //Bucles

// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];


// //Bucle While
// console.log("salida bucle While");
// let i=0
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }

// //Bucle for
// console.log("salida bucle For");
// for(let j=0;j<6;j++){
//     console.log(v[j]);
// }

// //Bucle Do-While
// console.log("salida bucle Do-While");
// let k=0
// do{
//     console.log(v[k]);
//     k++;
// }while(k<6);

//Ejemplo diapositiva

// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// /* Vamos cogiendo cada elemento...*/
// for (let i=0; i<v.length; i++){
//  /* Y se compara con todos los demas*/
//  for (let j=0; j<v.length; j++) {
//  if (v[j]>v[i]) {
//  let aux=v[i];
//  v[i]=v[j];
//  v[j]=aux;
//  } /* Fin del if*/
//  } /* Fin del for interno*/
// } /* fin del for externo*/
// /* Se imprime el contenido*/
// for (let i=0; i<v.length; i++){
//  console.log("Pos "+i+ ":"+v[i]);
// }
// console.log(v);


// let numero=prompt("Introduce un numero");
// let salida='';
// for(let i=0;i<numero;i++){
//     for(let j=0;j<i+1;i++){
//         salida=salida+'*';
//     }
//     console.log(salida);
// }


//Uso de funciones
function ejemplo( nombre, apellidos="López") {
    console.log("Hola "+ nombre);
    }
    ejemplo("Manuel");
    ejemplo("Pepito", "Grillo");