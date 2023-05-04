//1
// function notafinal(t,p){
// t=prompt ("Nota Teorica: ");
// p=prompt ("Nota Practica: ");
//     t=t*60/100;
//     p=p*60/100;
//     return t+p;
// alert ("Tu nota es: "+notafinal(t,p));
// }
// notafinal(t,p);

//2
// function factorial(n) {
//     if (n <= 1) return 1;
//     else return n*factorial(n-1);
// }
// console.log(factorial(3));
// console.log(factorial(5));

//3
// function suma() {
//     let v=[2,6,4,8,56,34,3,9];
//     let s = 0;
//     for(let i=0;i<v.length;i++){
//         s+=v[i];
//     }
//     console.log("El resultado de la suma es: " +s);
// }

//4
//     let frase = "hola mundo";
//     let letra = "o";
//     let programa = (cadena,busqueda)=> {
//         let contador = 0;
//         for (let i=0; i<frase.length; i++) {
//             if (frase.substr(i,letra.length)==letra) {
//                 contador++;
//                 i+=letra.length;
//             }
//         }
//         return contador;
//     }
// console.log(programa(frase,letra));

//5
// function calculadora() {
//     let numero1,numero2,resultado;
//     do {
//         consulta = prompt("Introduce la operacion (+,+,*./) o -1 para salir");
//         switch(consulta) {
//             case "+":
//                     numero1=prompt("Introduce un numero1: ");
//                     numero2=prompt("Introduce un numero2: ");
//                     alert("El resultado es: ${numero1 + numero2}");
//                     break;
//             case "-":
//                 numero1=prompt("Introduce un numero1: ");
//                 numero2=prompt("Introduce un numero2: ");
//                 alert("El resultado es: ${numero1 - numero2}");
//                 break;
//             case "*":
//                 numero1=prompt("Introduce un numero1: ");
//                 numero2=prompt("Introduce un numero2: ");
//                 alert("El resultado es: ${numero1 * numero2}");
//                 break;
//             case "/":
//                 numero1=prompt("Introduce un numero1: ");
//                 numero2=prompt("Introduce un numero2: ");
//                 alert("El resultado es: ${numero1 / numero2}");
//                 break;
//         }
//     }
// }

//6

// let numero=Math.floor(Math.random()*100)+1;
// console.log(numero);
// let consulta,contador=0;
// do {
//     consulta=prompt("Introduce un numero o indica -1 para salir:");
//     if(consulta < numero & comsulta !=1){
//         alert("El numero es inferior ")
//     }
// }
