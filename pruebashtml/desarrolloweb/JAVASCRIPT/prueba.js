/*let edad;
edad = Number((prompt("Introduce tu edad: ")));
if(isNaN(edad)){
    console.log("lo que has introducido no es un numero , vuelva a intentarlo");
}
if (edad < 18) {
console.log("Tienes menos de 18 años.");
} else if (edad >= 18 && edad <= 21) {
console.log("Tenes entre 18 y 21 años de edad.");
} else {(edad>=22)
console.log("Tiene más de 21 años.");
}
*/
/*let expr="Manzanas";
switch (expr) {
    case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
    case 'Manzanas':
    case 'Platanos':
    console.log('El kilogramo cuesta $0.48.');
    break;
    default:
    console.log('Lo lamentamos, no  disponemos de ' + expr + '.');
   }
   
   //omposicion de texto 
   
   console.log('"hola mundo"');
   let nombre="domingo lopez oller";
   let edad=37 ;
   console.log("hola , "+nombre)

*/

//bucle 


// console.log("salida bucle  while")

//    let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// /* Vamos cogiendo cada elemento...*/
// let i=0 ;
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }

// //bucle for 
// console.log("salida bucle for")

// for(let j=0;j<6;j++){
//     console.log(v[i])
// }


// //bucle do while

// console.log("salida bucle do while")

// let k=0 ;
// do {
//     console.log(v[k])
//     k++

// } while (k<6)


// ejemplo diapositiva 

// let v=[9.98, -3 , 4.53,8.91, 10, 2.31];
// /* Vamos cogiendo cada elemento...*/
// for (let i=0; i<v.length; i++){
//  /* Y se compara con todos los demas*/
//  for (let j=0; j<v.length; j++) {
//  if (v[j]<v[i]) {
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
// */

// let numero=prompt("introduce un numero");
// let salida='';
// for (let i=0;i<numero ; i=i+1){
//     for (let j=0;j<i+1;j++){
//         salida+='*';
//     }
//     console.log(salida);
// }


// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31]; 
// let suma=0
//    for (let i=0;i<v.length;i++){
//     suma=suma+v[i];
//    }
//    let resultado=suma/v.length;
//    console.log(resultado);


// simular la entrada de datos 
// let dato ;

// do {
//      dato=prompt("introduce un numero y si quieres cancelar -1");

// }while(dato= -1);


// function sum(x,y,z){
//     return x+y+z ;
// }
// function sum2(x,y,z){
//     console.log(x+y+z);
// }

// const numbers = [1 , 2 , 3];

// console.log(sum(... numbers)+3)
// console.log(sum2(... numbers)+3)



// let multiplicar3= (a,b) => a * b ; //funcion flecha
// console.log(multiplicar3(5,23)) ;


//usuario escribe su nota y que este se le redonde un 60 y 40 por ciento 




// let nota=prompt("escriba su nota de teoria ")

// let nota2=prompt("escriba su nota de practica") ;



// alert("tu nota de teoria es " + nota*(60/100)  );
// alert("tu nota de practica es " + nota*(40/100) );



// let teeoria=prompt("introduce tu nota de teoria")



// 2.- funcion factorial

// function factorial(n){
//     if (n<=1){
//         return 1 ;
// }
//     else {
//         return n*factorial(n-1);
//     }
// }

//     console.log(factorial(3));
//     console.log(factorial(5));
//     console.log(factorial(10));


//3 actividad 

// let v=[9.98,7.85,5,6,5];
// let suma=0;
// for(let i=0;i<v.length;i++){
//     suma+=v[i];
// }
// console.log("el resultado de la suma es:"+ suma);

// let frase="hola caracola" ;
// let letra="la";
// let programa=(cadena,busqueda) =>{
//     let contador=0;
//     for (let i=0;i<frase.length;i++){
//         if(frase.substr(i.busqueda.length)==busqueda){
//             contador++;
//             i+=busqueda.length
//         }
//     }
//     return contador
// }

// console.log("en la frase")

// vector_numeros=new Array(3)
// vector_numeros[0]=23; vector_numeros[1]=-45.23
// vector_numeros[5]="hola"; vector_numeros[-1]=3;
// const fruits = ["Banana", "Orange"];
// fruits.push("Kiwi", "Lemon"); 
// console.log(fruits);
// fruits.pop();
// console.log(fruits)



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
   console.lof("el depor")