/* Escribe una función que solicita al usuario su nota del 
examen de teoría y prácticas y le devuelve en un alert con 
la nota ponderando un 60% y 40% respectivamente.*/

// function calcularNotaPonderada() {
//     var notaTeoria = parseFloat(prompt("Introduce la nota del examen de teoría:"));
//     var notaPracticas = parseFloat(prompt("Introduce la nota del examen de prácticas:"));
  
//     // Calcular la nota ponderada
//     var notaFinal = (notaTeoria * 0.6) + (notaPracticas * 0.4);
  
//     // Mostrar el resultado en un alert
//     alert("Su nota ponderada es: " + notaFinal.toFixed(2));
//   }
  
//   calcularNotaPonderada();

  /*2) Escribe el código de Javascript que calcula el factorial de un 
número pasado como parámetro.*/


// function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1; 
//     } else {
//       var factorial = 1;
//       for (var i = 2; i <= numero; i++) {
//         factorial *= i;
//       }
//       return factorial;
//     }
//   }
  
//   var numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
//   var resultado = calcularFactorial(numero);
//   console.log("El factorial de " + numero + " es: " + resultado);

// 3) Escribe la función que suma los elementos de un array
// Ahora investiga cómo se haría con la función reduce

// function sumarArray(array) {
//     var suma = 0;
//     for (var i = 0; i < array.length; i++) {
//       suma += array[i];
//     }
//     return suma;
//   }
  
//   var numeros = [1, 2, 3, 4, 5];
//   var resultado = sumarArray(numeros);
//   console.log("La suma de los elementos del array es: " + resultado);

//   function sumarArrayReduce(array) {
//     var suma = array.reduce(function(acc, elemento) {
//       return acc + elemento;
//     }, 0);
//     return suma;
//   }
  
//   var numeros = [1, 2, 3, 4, 5];
//   var resultado = sumarArrayReduce(numeros);
//   console.log("La suma de los elementos del array es: " + resultado);

// 4) Escribe un programa que devuelva el número de veces que 
// aparece una letra en una cadena. Tu programa debería 
// recibir una cadena y la letra.
// let programa = (cadena, letra) => {...}
// Después, debe devolver el número de veces que la letra 
// aparece en la cadena. Dado el texto "JavaScript" y la letra 
// "a", su programa debe devolver 2. Intenta hacerlo luego 
// con substr (Recuerda que hay funciones ya creadas)

// let programa = (cadena, letra) => {
//     let contador = 0;
//     for (let i = 0; i < cadena.length; i++) {
//       if (cadena[i] === letra) {
//         contador++;
//       }
//     }
//     return contador;
//   };
  
//   let texto = "JavaScript";
//   let letraBuscada = "a";
//   let resultado = programa(texto, letraBuscada);
//   console.log("El número de veces que la letra '" + letraBuscada + "' aparece en la cadena es: " + resultado);

//   let programaConSubstr = (cadena, letra) => {
//     let contador = 0;
//     let indice = cadena.indexOf(letra);
//     while (indice !== -1) {
//       contador++;
//       indice = cadena.indexOf(letra, indice + 1);
//     }
//     return contador;
//   };
  
//   let texto = "JavaScript";
//   let letraBuscada = "a";
//   let resultado = programaConSubstr(texto, letraBuscada);
//   console.log("El número de veces que la letra '" + letraBuscada + "' aparece en la cadena es: " + resultado);

// 5) Escribe un programa para simular el comportamiento de 
// una calculadora.
// Habrá un bucle do-while que irá pidiendo la operación 
// (+,-,*,/) que se introducirá con un número y los operandos 
// para que en un switch haga la operación. 
// Si se introduce -1 en la operación el programa finaliza

// let calculadora = () => {
//     let operacion;
    
//     do {
//       operacion = parseInt(prompt("Introduce la operación que quieres realizar:\n1. Suma (+)\n2. Resta (-)\n3. Multiplicación (*)\n4. División (/)\n-1. Salir"));
  
//       switch (operacion) {
//         case 1:
//           let sumaOperandos = obtenerOperandos();
//           console.log("El resultado de la suma es: " + sumaOperandos[0] + " + " + sumaOperandos[1] + " = " + (sumaOperandos[0] + sumaOperandos[1]));
//           break;
//         case 2:
//           let restaOperandos = obtenerOperandos();
//           console.log("El resultado de la resta es: " + restaOperandos[0] + " - " + restaOperandos[1] + " = " + (restaOperandos[0] - restaOperandos[1]));
//           break;
//         case 3:
//           let multiplicacionOperandos = obtenerOperandos();
//           console.log("El resultado de la multiplicación es: " + multiplicacionOperandos[0] + " * " + multiplicacionOperandos[1] + " = " + (multiplicacionOperandos[0] * multiplicacionOperandos[1]));
//           break;
//         case 4:
//           let divisionOperandos = obtenerOperandos();
//           if (divisionOperandos[1] === 0) {
//             console.log("No se puede dividir entre 0");
//           } else {
//             console.log("El resultado de la división es: " + divisionOperandos[0] + " / " + divisionOperandos[1] + " = " + (divisionOperandos[0] / divisionOperandos[1]));
//           }
//           break;
//         case -1:
//           console.log("Saliendo...");
//           break;
//         default:
//           console.log("Operación no válida. Por favor, seleccione una operación válida.");
//           break;
//       }
//     } while (operacion !== -1);
//   };
  
//   let obtenerOperandos = () => {
//     let operando1 = parseFloat(prompt("Introduce el primer operando:"));
//     let operando2 = parseFloat(prompt("Introduce el segundo operando:"));
//     return [operando1, operando2];
//   };
  
//   calculadora();

// 6) Escribe un programa llamado AdivinaNumero que genera 
// un número aleatorio entre 0 y 100 y mediante un bucle dowhile vaya solicitando números al usuario hasta que 
// acierte. Si el número introducido es menor o mayor que el 
// objetivo se lo indicará en un alert. Si acierta le indicará que 
// ha acertado y el número de intentos realizado. (usa 
// Math.random y Math.floor)

// function AdivinaNumero() {
//     var numeroObjetivo = generarNumeroAleatorio();
//     var numeroIntentos = 0;
//     var adivinado = false;
  
//     do {
//       var numeroUsuario = parseInt(prompt("Adivina el número entre 0 y 100:"));
//       numeroIntentos++;
  
//       if (numeroUsuario === numeroObjetivo) {
//         adivinado = true;
//         alert("Has acertado el número, el número era " + numeroObjetivo + ".\nNúmero de intentos: " + numeroIntentos);
//       } else if (numeroUsuario < numeroObjetivo) {
//         alert("El número introducido es menor que el número objetivo. Inténtalo nuevamente.");
//       } else {
//         alert("El número introducido es mayor que el número objetivo. Inténtalo nuevamente.");
//       }
//     } while (!adivinado);
//   }
  
//   function generarNumeroAleatorio() {
//     return Math.floor(Math.random() * 101); // Genera un número aleatorio entre 0 y 100
//   }
  
  
//   AdivinaNumero();