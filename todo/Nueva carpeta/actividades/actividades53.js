// 1 Pedir notas, Multiplicar las notas por 60 y por 40 segun si es teorico o practico El resultado se suma, Y se divide entre 100.

//  let teorico=prompt("Introduce Nota del Teorico");
//  let practico=prompt("Introduce Nota del Practico");

//     function imprimeNota(NTeorico,NPractico){

//  let resultado=0.6*NTeorico+0.4*NPractico;
// alert('El resultado de la evaluacion es: ' +resultado)

//  }

// let imprimeNota2 = (NTeorico,NPractico) => { ('El resultado de la evaluacion es: ' +(0.6*NTeorico+0.4*NPractico));}

// imprimeNota(teorico,practico);
// imprimeNota2(teorico,practico);

// 2) Escribe el código de Javascript que calcula el factorial de un número pasado como parámetro.

// function factorial(n){
//     if (n<=1)
//         return 1;

//     else{
//      return n*factorial(n-1);
//     }
// }

// console.log(factorial(3));
// console.log(factorial(5));


// 3 Escribe la función que suma los elementos de un array Ahora investiga cómo se haría con la función reduce

// function sumafuncion(){
// let v=[9.98,7.86,4.53,8.91,5.76,2.31];
// let suma=0;

// for(let i=0;i<v.length;i++){
//     suma+=v[i];
// }
// console.log('El resultado de la suma es: ' +suma)
// }
// sumafuncion();

// 4 Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra. let programa = (cadena, letra) => {...} Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra "a", su programa debe devolver 2. Intenta hacerlo luego con substr (Recuerda que hay funciones ya creadas)

// let frase='hola caracola';
// let letra='la';
// let programa = (cadena,letra) =>{
//     let contador=0;
//     for(let i=0;i<frase.length;i++){
//         if(frase.substr(i,letra.length)==letra){
//         contador++;
//         i+letra.length;
//         }
//     }
//         return contador;
// }
// console.log('En la frase \' '+frase+' aparece '+programa(frase,letra)+' veces la letra '+letra);


// 5 ) Escribe un programa para simular el comportamiento de una calculadora. Habrá un bucle do-while que irá pidiendo la operació (+,-,*,/) que se introducirá con un número y los operandos para que en un switch haga la operación. Si se introduce -1 en la operación el programa finaliza
function menuCalculadora(){
    let numero1,numero2,resultado;
do{
    consulta=prompt('Introduce la operacion a realizar(+,-,*,/) o indica -1 para salir: ');
    switch(consulta){
        case '+':
            numero1=prompt('introduce numero1: ');
            numero2=prompt('introduce numero2: ');
            alert('El resultado es:  ${numero1 + numero2}');
            break;
        case '-':
            numero1=prompt('introduce numero1: ');
            numero2=prompt('introduce numero2: ');
            alert('El resultado es:  ${numero1 - numero2}');
            break;

        case '*':
            numero1=prompt('introduce numero1: ');
            numero2=prompt('introduce numero2: ');
            alert('El resultado es:  ${numero1 * numero2}');
            break;
        case '/':
            numero1=prompt('introduce numero1: ');
            numero2=prompt('introduce numero2: ');
            alert('El resultado es:  ${numero1 / numero2}');
            break;
    }
}

}

menuCalculadora();

// 6 Escribe un programa llamado AdivinaNumero que genera un número aleatorio entre 0 y 100 y mediante un bucle dowhile vaya solicitando números al usuario hasta que acierte. Si el número introducido es menor o mayor que el objetivo se lo indicará en un alert. Si acierta le indicará que ha acertado y el número de intentos realizado. (usa Math.random y Math.floor)
function AdivinaNumero(){
let numero=Math.floor(Math.random()*100+1);
console.log(numero);
let consulta,contador=0;
do{
    consulta=prompt()
}

}
AdivinaNumero();



// Actividad: Genera un array de 5 números aleatorios donde no se repita ninguno. Antes de asignarlo tienes que ver si está ya con otro bucle.


// – Actividad: A partir del siguiente enlace, implementa el algoritmo de ordenación por burbuja y compara el resultado con la función sort. Array: [389,703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];

