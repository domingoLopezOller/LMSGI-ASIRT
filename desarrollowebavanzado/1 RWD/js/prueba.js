// var i=0
// for (i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i+3);
// var i="hola"

// let edad;
// edad = Number((prompt("Introduce tu edad: ")));
// if (edad < 18) {
// console.log("Tienes menos de 18 años.");
// } else if (edad >= 18 && edad <= 21) {
// console.log("Tenes entre 18 y 21 años de edad.");
// } else {
// console.log("Tiene más de 21 años.");
// }

// let expr='Manzanas'
// switch (expr) {
//     case 'Naranjas':
//     console.log('El kilogramo de naranjas cuesta $0.59.');
//     break;
//     case 'Manzanas':
//     case 'Platanos':
//     console.log('El kilogramo cuesta $0.48.');
//     break;
//     default:
//     console.log('Lo lamentamos, no disponemos de ' + expr + '.');
//     }

//BUCLES//
// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];

// //BUBLE WHILE
// console.log("salida bucle while")
// let i=0
// while(i<6){
//     console.log(v[i]);
//     i=i+1   
// }

// //BUCLE FOR
// console.log("salida bucle for")
// for(let j=0;j<6;j++){
//     console.log(v[j]);
// }

// //BUCLE DO-WHILE
// console.log("salida bucle do-while")
// let k=0
// do{
//     console.log(v[k]);
//     k++ 
// }while(k<6)

// //ejemplo diapositiva pag 51
// for (let i=0; i<v.length; i++){
// /* Y se compara con todos los demas*/
// for (let j=0; j<v.length; j++) {
// if (v[j]>v[i]) {
// let aux=v[i];
// v[i]=v[j];
// v[j]=aux;
// } /* Fin del if*/
// } /* Fin del for interno*/
// } /* fin del for externo*/
// /* Se imprime el contenido*/
// for (let i=0; i<v.length; i++){
// console.log("Pos "+i+ ":"+v[i]);
// }
// console.log(v);

// let numero=prompt("Introduce un numero");
//     let salida='';
//     for (let i=0;i<numero;i++){
//         for (let j=0;j<i+1;j++){
//             salida=salida+'*';
//         }
//         console.log(salida)
//     }



 //uso de funciones
//  function ejemplo( nombre, apellidos) {
//     if (apellidos != undefined){
//     console.log("Hola "+ nombre + " "+ apellidos);
//     } else{
//     console.log("Hola "+ nombre);
//     }
//     }
//     ejemplo();
    

// function ejemplo(param1, param2, ...restParams){
//     console.log(restParams);
//     }
//     ejemplo('a', 'b', 'c', 'd', 'e', 'f');
//     //en restParams está el array ["c", "d", "e", "f"] que  es el contenido de la lista separada por comas. Si fuera un array se usaría así:
//     function sum(x, y, z) {
//     return x + y + z;
//     }
//     function sum2(x,y,z){
//         console.log(x+y+z);
//     }
//     const numbers = [1, 2, 3];
//     console.log(sum(...numbers)+3);
//     console.log(sum2(...numbers)+3)

// function ejemplo( nombre, apellidos) {
//     if (apellidos != undefined){
//     console.log("Hola "+ nombre + " "+ apellidos);
//     } else{
//     console.log("Hola "+ nombre); 
// }
//     }
//     ejemplo("Manuel");
//     ejemplo("Pepito", "Grillo");

//varias formas de hacer un function

function multiplicar(a,b){
    return a*b;
}
console.log(multiplicar(5,23));

let multiplicar2 = function(a,b) { return a * b;}
console.log(multiplicar2(5,23));

let multiplicar3 = (a,b) => a*b //funcion flecha
console.log(multiplicar3(5,23));