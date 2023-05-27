// Actividad: Genera un array de 5 números aleatorios entre 0 y 99 donde no se 
// repita ninguno. Antes de asignarlo tienes que ver si está ya con otro bucle. Usa 
// Math.random 


// function generarArrayAleatorio() {
//     var array = [];
  
//     while (array.length < 5) {
//       var numeroAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
  
//       if (array.indexOf(numeroAleatorio) === -1) {
//         array.push(numeroAleatorio);
//       }
//     }
  
//     return array;
//   }
  
//   // Generar el array aleatorio
//   var numerosAleatorios = generarArrayAleatorio();
  
//   console.log("Array de números aleatorios sin repetir:");
//   console.log(numerosAleatorios);


// Actividad: A partir del siguiente enlace, implementa el algoritmo de ordenación por 
// burbuja y compara el resultado con la función sort. Array: [389, 703, 247, 563, 224, 
// 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];

// function ordenacionBurbuja(array) {
//     var n = array.length;
//     var intercambiado;
  
//     do {
//       intercambiado = false;
  
//       for (var i = 0; i < n - 1; i++) {
//         if (array[i] > array[i + 1]) {
//           var temp = array[i];
//           array[i] = array[i + 1];
//           array[i + 1] = temp;
//           intercambiado = true;
//         }
//       }
  
//       n--;
//     } while (intercambiado);
  
//     return array;
//   }
  
//   var array = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
  
//   // Ordenar el array utilizando el algoritmo de ordenación por burbuja
//   var arrayOrdenadoBurbuja = ordenacionBurbuja(array.slice()); // Hacemos una copia del array original
  
//   // Ordenar el array utilizando la función sort
//   var arrayOrdenadoSort = array.slice().sort(function(a, b) {
//     return a - b;
//   });
  
//   console.log("Array original: " + array);
//   console.log("Array ordenado por burbuja: " + arrayOrdenadoBurbuja);
//   console.log("Array ordenado con sort: " + arrayOrdenadoSort);