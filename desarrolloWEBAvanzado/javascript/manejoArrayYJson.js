//Relación de ejercicios
// 1- 
    // let teoria=prompt("Introduce la nota de teoría");
    // let practica=prompt("Introduce la nota de prácticas");
    // function imprimeNota(NTeoria,NPractica){
    //     let resultado=0.6*NTeoria+0.4*NPractica;
    //     alert("El resultado de la evaluación es: "+resultado);
    // }
    // let imprimeNota2 = (NTeoria,NPractica) =>{ alert("El resultado de la evaluación es: "+(0.6*NTeoria+0.4*NPractica));}
    // imprimeNota(teoria,practica);
    // imprimeNota2(teoria,practica);

// 2- FUnción factorial
    // function factorial(n){
    //     if (n<=1) {
    //         return 1;
    //     }
    //     else {
    //         return n*factorial(n-1);
    //     }
    // }
    // console.log(factorial(3));
    // console.log(factorial(5));

// 3- Suma los valors del vector
    // function suma(){
    //     let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
    //     let suma=0;
    //     for(let i=0;i<v.length;i++){
    //         suma+=v[i];
    //     }
    //     console.log("El resultado de la suma es: "+suma);
    // }
    // suma();

// 4- Buscar palabras dentro de una frase
// let frase="hola caracola";
// let letra='la';
// let programa = (cadena,busqueda) =>{
//     let contador=0;
//     for(let i=0;i<frase.length;i++){
//         if(frase.substr(i,busqueda.length)==busqueda){ 
//             contador++;
//             i+=busqueda.length;
//         }
//     }
//     return contador;
// }
// console.log("En la frase \" "+frase+" aparece "+programa(frase,letra)+" la letra "+letra);

//5- Hacer un menú con do-while
// function menuCalculadora(){
//     let numero1,numero2,resultado;
//     do{
//         consulta=prompt("Introduce la operación a realizar (+,-,*,/) o indica -1 para salir:");
//         switch(consulta){
//             case '+':
//                 numero1=prompt("Introduce número1: ");
//                 numero2=prompt("Introduce número1: ");
//                 alert(`El resultado es: ${numero1+numero2}`);
//                 break;
//             case '-':
//                 numero1=prompt("Introduce número1: ");
//                 numero2=prompt("Introduce número1: ");
//                 alert(`El resultado es: ${numero1-numero2}`);
//                 break;
//             case '*':
//                 numero1=prompt("Introduce número1: ");
//                 numero2=prompt("Introduce número1: ");
//                 alert(`El resultado es: ${numero1*numero2}`);
//                 break;
//             case '/':
//                 numero1=prompt("Introduce número1: ");
//                 numero2=prompt("Introduce número1: ");
//                 alert(`El resultado es: ${numero1/numero2}`);
//                 break;
//             default:
//                 alert("No está esa operación en el listado");
//         }
//     }while(consulta!=-1);
// }
// menuCalculadora();

// 6- Adivina el número

// function adivinaNumero(){
//     //Número aleatorio entre 1 y 100
//     let numero=Math.floor(Math.random()*100)+1;
//     console.log(numero);
//     let consulta,contador=0;
//     do{
//         consulta=prompt("Introduce un número o indica -1 para salir:");
//         if(consulta < numero & consulta !=-1){
//             alert("El número es inferior al correcto")
//         }
//         else if (consulta > numero & consulta !=-1){
//             alert("El número es superior al correcto")
//         }
//         else{
//             consulta=-1;
//         }
//         contador++;
//     }while(consulta!=-1);
//     alert("El número correcto es: "+numero+ " y has realizado "+contador+" intentos.");
// }
// adivinaNumero();


// ARRAYS Y OBJETOS
//Tened cuidado con insertar o escribir fuera del tamaño del Array.
//JAVASCRIPT NO SE QUEJA
// vector_numeros=new Array(3)
// vector_numeros[0]=23; vector_numeros[1]=-45.23
// vector_numeros[5]="hola"; vector_numeros[-1]=3;
// console.log(vector_numeros);   

// En este caso se controla mejor qué se inserta y qué se extrae del array. Se cambia el tamaño de forma dinámica
// const fruits = ["Banana", "Orange"];
// fruits.push("Kiwi", "Lemon"); 
// console.log(fruits);
// fruits.pop();
// console.log(fruits);



// Copia de vectores
// let v=[1,2,3,4,5,6];
// let a=v; // OJO que esto no es crear una variable con contendio, sólo es una REFERENCIA en memoria
// console.log(a);
// a[0]=-3;
// console.log(a);
// console.log(v);

// v=[1,2,3,4,5,6];
// //Caso de copia con operador SPREAD
// let c=[...v]; // uso del operado spread
// console.log(c);
// c[0]=-3;
// console.log(c);
// console.log(v);

//Manipulación de objetos
var empleado={
    nombre:"Pepe Perez",
    edad:27,
    deportes:["ajedrez","fútbol"],
    estaJubilado:function (){
        if (this.edad>65) {
            return true
        } else {
            return false
        }
    }
}

//Acceso según las claves del objeto empleado
console.log(empleado.edad);
console.log(empleado.deportes);
console.log(empleado.estaJubilado);