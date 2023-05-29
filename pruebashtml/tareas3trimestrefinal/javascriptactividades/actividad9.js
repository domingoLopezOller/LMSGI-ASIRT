
alert('1')
let notaTeoria=prompt("Introduce la nota de teoría");
let notaPractica=prompt("Introduce la nota de práctica");

function CalculaNota(PTeoria,PPractica){

let resultado = 0.6 * PTeoria + 0.4 * PPractica;
alert("El resultado de la evaluación es: "+resultado);

}

CalculaNota(notaTeoria,notaPractica);

alert('2')

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  var numero = parseInt(prompt("Ingrese un número:"));
  var factorial = calcularFactorial(numero);
  alert("El factorial de " + numero + " es: " + factorial);
  

alert ('3')

function sumarArray(array) {
    var suma = array.reduce(function(acumulador, elemento) {
      return acumulador + elemento;
    }, 0);
    return suma;
  }
  
  // Ejemplo de uso
  var numeros = prompt("Ingrese los números separados por comas:"); // Ejemplo de entrada: 1,2,3,4,5
  var miArray = numeros.split(",").map(function(numero) {
    return parseInt(numero);
  });
  var resultado = sumarArray(miArray);
  console.log("La suma de los elementos del array es: " + resultado);
  

alert ('5')

 function menuCalculadora(){
     let numero1,numero2;
     do{
         consulta=prompt("Introduce la operación a realizar (+,-,*,/) o indica -1 para salir:");
         switch(consulta){
             case '+':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${parseInt(numero1, 10)+parseInt(numero2, 10)}`);
                 break;
             case '-':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1-numero2}`);
                 break;
             case '*':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1*numero2}`);
                 break;
             case '/':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1/numero2}`);
                 break;
             default:
                 alert("No está esa operación en el listado");
         }
     }while(consulta!=-1);
 }
 menuCalculadora();


alert('6')
 function adivinaNumero(){
     let numero=Math.floor(Math.random()*100);
     console.log(numero);
     let consulta,contador=0;
     do{
         consulta=prompt("Introduce un número o indica -1 para salir:");
         if(consulta < numero & consulta !=-1){
             alert("El número es inferior al correcto")
             contador++;
         }
         else if (consulta > numero & consulta !=-1){
             alert("El número es superior al correcto")
             contador++;
         }
         else{
             consulta=-1;
         }
     }while(consulta!=-1);
     alert("El número correcto es: "+numero+ " y has realizado "+contador+" intentos.");
 }
 adivinaNumero();

