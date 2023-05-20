//Relación de ejercicios
alert('1. Escribe una función que solicita al usuario su nota del examen de teoría y prácticas y le devuelve en un alert con la nota ponderando un 60% y 40% respectivamente.');

let notaTeoria=prompt("Introduce la nota de teoría");
let notaPractica=prompt("Introduce la nota de práctica");

function CalculaNota(PTeoria,PPractica){

let resultado = 0.6 * PTeoria + 0.4 * PPractica;
alert("El resultado de la evaluación es: "+resultado);

}

CalculaNota(notaTeoria,notaPractica);


alert('5. Escribe un programa para simular el comportamiento de una calculadora. Habrá un bucle do-while que irá pidiendo la operación (+,-,*,/) que se introducirá con un número y los operandos para que en un switch haga la operación. Si se introduce -1 en la operación el programa finaliza');


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


alert('6. Escribe un programa llamado AdivinaNumero que genera un número aleatorio entre 0 y 100 y mediante un bucle do-while vaya solicitando números al usuario hasta que acierte. Si el número introducido es menor o mayor que el objetivo se lo indicará en un alert. Si acierta le indicará que ha acertado y el número de intentos realizado. (usa Math.random y Math.floor)');

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
