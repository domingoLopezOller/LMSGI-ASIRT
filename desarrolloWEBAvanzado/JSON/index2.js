//LECTURA DE DATOS IMPORTANDO EL FICHERO DIRECTAMENTE
//Equivalente a esto pero en <script hay que poner esto: <script type="module"
import json2 from "./heroes.json" assert { type: "json" };

// Procesar el fichero para mostrar por HTML
document.getElementById("demo").innerHTML += json2.map((heroe) => {
  if (heroe.publisher == "Marvel Comics") {
    return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
  }
});
// Colocar ahora los de DC
document.getElementById("demo").innerHTML +=
  "</ul><br/><h2>Lista de DC Comics</h2></ul>" +
  json2.map((heroe) => {
    if (heroe.publisher == "DC Comics") {
      return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
    }
  });

//LECTURA DE DATOS GENERAL COMO FICHERO EN UNA URL
fetch("./heroes.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Procesar el fichero para mostrar por HTML
    document.getElementById("demo2").innerHTML += jsonData.map((heroe) => {
      if (heroe.publisher == "Marvel Comics") {
        return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
      }
    });
    // Colocar ahora los de DC
    document.getElementById("demo2").innerHTML +=
      "</ul><br/><h2>Lista de DC Comics</h2></ul>" +
      jsonData.map((heroe) => {
        if (heroe.publisher == "DC Comics") {
          return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
        }
      }).join('');
  })
  .catch((error) => {
    throw error;
  });

