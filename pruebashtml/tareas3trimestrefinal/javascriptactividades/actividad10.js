
console.log('Genera un array de 5 números aleatorios');

let i = 0;
const vectorial = [];
let count = 0;
let encontrado = 0;
let numero = 0;

while (i < 5) {
    numero = Math.floor(Math.random() * 99);
    encontrado = 0;
    for (count = 0;count<vectorial.length;count++){
        if (vectorial[count] == numero){
            encontrado = 1;
        }
    }

    if (encontrado == 0){
        vectorial.push(numero);
        i = i + 1;
    }
}

console.log(vectorial);

// Implementa el algoritmo de ordenación por burbuja.
console.log('Implementa el algoritmo de ordenación por burbuja.');

function algoritmoBurbuja(datos) {
    let longitud = datos.length;  
    for (let i = 0; i < longitud; i++) {
          for (let j = 0; j < (longitud - i - 1); j++) {
                   if(datos[j] > datos[j+1]) {
                           let temporal = datos[j]; 
                datos[j] = datos[j+1]; 
                datos[j+1] = temporal; 
            }
        }        
    }
}

let v = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131]; 
algoritmoBurbuja(v);

console.log(v);

//Compara el resultado con la función sort.
console.log('Compara el resultado con la función sort.')

let array = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131]; 

array.sort(); 

console.log(array);
