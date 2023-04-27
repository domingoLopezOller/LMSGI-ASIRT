// let i=0;
// for (i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i+3);
// let j="hola";

// const PI =3.141592;
// let radio=3;
// console.log(2*PI*radio);


// const IVA =21;
// let radioCirculo;
// let ladoPoligonoRectoMayor;
// let lado_poligono_recto_mayor;


// // comentarios
// /*
// adsfadsf
// asdfasd
// asdfadsf
// */

// //Salida por pantalla/consola
// console.log("HOla mundo");
// document.write("<h1>Texto generado desde Javascipt</h1>");
// // alert("Alerta de fallo en JavaScript");
// // window.print();


// //Entrada por teclado
// let numero =prompt("Introduce un número");
// document.write("El número introducido es: "+numero);
// confirm("Pulsar para morir");

//Código de if-else
// let edad;
// edad = Number((prompt("Introduce tu edad: ")));
// if (isNaN(edad)){
//     console.log("Lo que has introducido no es un número");
// }
//   else if (edad < 18) {
// 	console.log("Tienes menos de 18 años.");
// } else if (edad >= 18 && edad <= 21) {
// 	console.log("Tenes entre 18 y 21 años de edad.");
// } else {
// 	console.log("Tiene más de 21 años.");
// }

//Código switch
// let expr='+';
// switch (expr) {
//     case '+':
//       console.log('Estás haciendo la suma');
//       break;
//     case 'Manzanas':
//     case 'Platanos':
//       console.log('El kilogramo cuesta $0.48.');
//       break;
//     default:
//       console.log('Lo lamentamos, no disponemos de ' + expr + '.');
//   }

// //Composición de texto
// console.log("Hola MUndo");
// let nombre="Domingo López Oller";
// let edad=37;
// console.log("¡Hola, "+nombre);
// console.log("¡Hola, "+nombre+ " tienes "+edad+ " años");

// //Versión ES6
// console.log(`¡Hola, ${nombre} tienes ${edad} años`);

// //Operador Elvis
// let valor=3;
// if(valor >=5){
//     console.log("Estás aprobado");
// }
// else{
//      console.log("Estás suspenso");
// }

// let resultado= valor>=5 ? "Estas aprobado": "Estás suspenso";
// console.log(resultado);

// //Bucles
// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// // Bucle while
// console.log("salida bucle while");
// let i=0;
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }
// // Bucle for
// console.log("salida bucle for");
// for(let j=0;j<6;j++){
//     console.log(v[j]);
// }

// // Bucle do-while
// console.log("salida bucle do-while");
// let k=0;
// do{
//     console.log(v[k]);
//     k++;
// }while(k<6)


//Ejemplo diapositiva
/* Vamos cogiendo cada elemento...*/
// let v=[9.98, -3, 4.53,8.91, 10, 2.31];
// for (let i=0; i<v.length; i++){
//     /* Y se compara con todos los demas*/
//     for (let j=0; j<v.length; j++) {
//         if (v[j]<v[i]) {
//             let aux=v[i];
//             v[i]=v[j];
//             v[j]=aux;
//         } /* Fin del if*/
//     } /* Fin del for interno*/
// } /* fin del for externo*/
// /* Se imprime el contenido*/
// for (let i=0; i<v.length; i++){
//     console.log("Pos "+i+ ":"+v[i]);
// }
// console.log(v);

// let numero=prompt("Introduce un número");
// let salida='';
// for (let i=0;i<numero;i=i+1){
//     for(let j=0;j<i+1;j++){
//         salida+='*';
//     }
//     console.log(salida);
// }

// //Calcular la media de un array
// let v=[3, 3, 3,3, 3, 3];
// let suma=0;
// for(let i=0;i<v.length;i++){
//     suma=suma+v[i];
// }
// let resultado=suma/v.length;
// console.log(resultado);

// //Simular la entrada de datos hasta recibir -1
// let dato;
// do{
//     dato=prompt("Introduce un número o -1 para salir");
// }while(dato!=-1);


//Uso de funciones
// function ejemplo( nombre, apellidos="López") {
// 	console.log("Hola "+ nombre + " "+apellidos);
// }

// ejemplo("Domingo","Oller");



// function ejemplo(param1, param2, ...restParams){
// 	console.log(restParams);
// } 
// ejemplo('a', 'b', 'c', 'd', 'e', 'f'); 

//Diferenciar función de procedimiento
// function sum(x, y, z) {
//     return x + y + z;
//   }
// function sum2(x,y,z){
//     console.log(x+y+z);
// }
  
// const numbers = [1, 2, 3];
  
// console.log(sum(...numbers)+3);
// console.log(sum2(...numbers)+3);

//Ejemplo de comprobar si se ha introducido un parámetro
// function ejemplo( nombre, apellidos) {
// 	if (apellidos != undefined){
// 		console.log("Hola "+ nombre + " "+ apellidos);
// 	} else{
// 		console.log("Hola "+ nombre);
// 	}
// }
// ejemplo("Manuel");
// ejemplo("Pepito", "Grillo");


//Varias formas de hacer una misma función
function multiplicar(a,b){
    return a*b;
}
console.log(multiplicar(5,23));

let multiplicar2 = function(a,b) { 
    return a * b; 
}
console.log(multiplicar2(5,23));
  
let multiplicar3 = (a,b) => a * b;  // FUNCIÓN FLECHA
console.log(multiplicar3(5 , 23 )); 
