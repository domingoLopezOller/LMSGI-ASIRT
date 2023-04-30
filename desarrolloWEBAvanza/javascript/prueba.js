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

//Composición de texto
console.log("Hola MUndo");
let nombre="Domingo López Oller";
let edad=37;
console.log("¡Hola, "+nombre);
console.log("¡Hola, "+nombre+ " tienes "+edad+ " años");

//Versión ES6
console.log(`¡Hola, ${nombre} tienes ${edad} años`);

//Operador Elvis
let valor=3;
if(valor >=5){
    console.log("Estás aprobado");
}
else{
     console.log("Estás suspenso");
}

let resultado= valor>=5 ? "Estas aprobado": "Estás suspenso";
console.log(resultado);

