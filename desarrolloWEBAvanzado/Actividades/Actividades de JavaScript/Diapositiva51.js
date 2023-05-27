let v = [9.98, 7.86, 4.53, 8.91, 5.76, 2.31];

// Calcular la media de los números en el vector
let suma = 0;
for (let i = 0; i < v.length; i++) {
  suma += v[i];
}
let media = suma / v.length;

console.log("La media de los números en el vector es: " + media);

// Bucle do-while para el menú
let opcion;
do {
  console.log("---- Menú ----");
  console.log("1. Opción 1");
  console.log("2. Opción 2");
  console.log("3. Salir");

  opcion = parseInt(prompt("Selecciona una opción:"));

  switch (opcion) {
    case 1:
      console.log("Seleccionaste la opción 1");
      break;
    case 2:
      console.log("Seleccionaste la opción 2");
      break;
    case 3:
      console.log("Saliendo...");
      break;
    default:
      console.log("Opción no válida. Por favor, selecciona una opción válida.");
      break;
  }
} while (opcion !== 3);