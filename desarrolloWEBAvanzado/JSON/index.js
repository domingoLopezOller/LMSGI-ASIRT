let datosJSON = [
  { name: "John", age: 13, car: "Ford" },
  { name: "Pilar", age: 23, car: "Seat" },
];
//Vamos a convertir el fichero en una estructura JSON (por si no lo fuera)
let jsonData = JSON.parse(JSON.stringify(datosJSON));
console.table(jsonData);

//Procesar el contenido del JSON
document.getElementById("demo").innerHTML = jsonData.map((elemento) => {
  if (elemento.age > 18) {
    return "<li>" + elemento.name + ", " + elemento.age + "</li>";
  }
});
