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

// //Salida por pantalla/consola
// console.log("Hola, mundo");
// document.write("<h1>Texto generado desde JavaScript</h1>");
// alert("Alerta de fallo en JavaScript");

//entrada por teclado
// let numero =prompt("Introduce un número");
// document.write("El número introducido es: "+numero);

// let edad;
// edad = Number((prompt("Introduce tu edad: ")));
// if (isNaN(edad)){
//     console.log("Lo que has introducido no es un número");
// }
// else if (edad < 18) {
// console.log("Tienes menos de 18 años.");
// } else if (edad >= 18 && edad <= 21) {
// console.log("Tienes entre 18 y 21 años de edad.");
// } else {
// console.log("Tiene más de 21 años.");
// }
// let expr ='Manzanas';
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
//    }
   
// //Composición de texto
// console.log("Hola, mundo");
// let nombre="Víctor Álvarez Fuentes";
// let edad=25;
// console.log("Hola, "+nombre);
// console.log("Hola, "+nombre+ " Tienes "+edad+ " años");

// //Version ES6
// console.log(`¡Hola, $(nombre) tienes $(edad) años`);

// //Operador Elvis
// let valor=3;
// if(valor >=5){
//     console.log("Estás aprobado")
// }
// else{
//     console.log("Estás suspenso");
// }

// let resultado= valor>=5 ? "Estás aprobado": "Estás suspenso";
// console.log(resultado);

//Bucles
// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];

// //Bucle while
// console.log("salida bucle while")
// let i=0;
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }

// //Bucle for
// console.log("salida bucle for")

// for(let j=0;j<6;j++){
//     console.log(v[j]);
// }

// //Bucle do-while
// console.log("salida bucle do-while")

// let k=0;
// do{
//     console.log(v[k]);
//     k++; 
// }while(k<6);

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

// let numero=prompt("Introduce un número");
// let salida='';
// for (let i=0;i<numero;i++){
//     for(let j=0;j<i+1;j++){
//         salida=salida+'*';
//     }
//     console.log(salida);
// }

//Uso de funciones
// function ejemplo( nombre, apellidos="López") {
//     console.log("Hola "+ nombre + " " +apellidos);
//     }
//     ejemplo("Domingo","Oller");

// Función sin total de parámetros definido
// function ejemplo(param1, param2, ...restParams){
//     console.log(restParams);
//     } 
//     ejemplo('a', 'b', 'c', 'd', 'e', 'f');

//Diferenciar función de procedimiento
    // function sum(x, y, z) {
    //     return x + y + z;
    //    }
    // function sum2(x, y, z){
    //     console.log(x+y+z);
    // }
    //    const numbers = [1, 2, 3];
    //    console.log(sum(...numbers)+3);
    //    console.log(sum2(...numbers)+3);

    // function ejemplo( nombre, apellidos) {
    //     if (apellidos != undefined){
    //     console.log("Hola "+ nombre + " "+ 
    //     apellidos);
    //     } else{
    //     console.log("Hola "+ nombre);
    //     }
    //     }
    //     ejemplo("Manuel");
    //     ejemplo("Pepito", "Grillo");
        
function multiplicar(a,b){
    return a*b;
}
console.log(multiplicar(5,23));
let multiplicar2 = function(a,b) {return a * b;}
console.log(multiplicar2(5,23))

let multiplicar3 = (a,b) => a * b;
console.log(multiplicar3(5 , 23 ))