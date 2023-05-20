//Relación de ejercicios
// 2. Escribe el código de Javascript que calcula el factorial de un número pasado como parámetro.
console.log('2. Escribe el código de Javascript que calcula el factorial de un número pasado como parámetro.');

function factorial(n){
    if (n<=1) {
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}
console.log(factorial(3));
console.log(factorial(5));

// 3. Escribe la función que suma los elementos de un array.
console.log('3. Escribe la función que suma los elementos de un array.');

 function sumaArray(){
     let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
     let suma=0;
     for(let i=0;i<v.length;i++){
         suma+=v[i];
     }
     console.log("El resultado de la suma es: "+suma);
 }
 sumaArray();

 // Ahora investiga cómo se haría con la función reduce.
 console.log('Ahora investiga cómo se haría con la función reduce.');
 const v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];

 const valorInicial = 0;
 const suma = v.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   valorInicial
 );
 
 console.log(suma);


// 4. Escribe un programa que devuelva el número de veces que
// aparece una letra en una cadena. Tu programa debería
// recibir una cadena y la letra.
// let programa = (cadena, letra) => {...}
// Después, debe devolver el número de veces que la letra
// aparece en la cadena. Dado el texto "JavaScript" y la letra
// "a", su programa debe devolver
console.log('4. Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra. let programa = (cadena, letra) => {...} Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra "a", su programa debe devolver'); 

let frase = "JavaScript";
let letra = 'a';

let myfunction = (frase,letra) =>{

const indices = [];

for(let i = 0; i < frase.length; i++) {
	if (frase[i].toLowerCase() === letra) indices.push(i);
}
    return indices.length;
};

console.log("En la frase: "+frase+" aparece "+myfunction(frase,letra)+" veces la letra "+letra);

// Intenta hacerlo luego con substr
console.log('Intenta hacerlo luego con substr');
  let frase2="JavaScript";
  let letra2='a';

  let myfunction2 = (frase2,letra2) =>{
      let contador=0;
      for(let i=0;i<frase2.length;i++){
          if(frase2.substr(i,letra2.length)==letra2){ 
              contador++;
              i+=letra2.length;
          }
      }
      return contador;
  }

  console.log("En la frase: "+frase2+" aparece "+myfunction2(frase2,letra2)+" veces la letra "+letra2);