let numeroObjetivo: number;
let numeroIntentos: number = 0;

function generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 101); // Genera un número aleatorio entre 0 y 100
}

function adivinaNumero(): void {
  numeroObjetivo = generarNumeroAleatorio();
  let numeroUsuario: number;
  
  do {
    numeroUsuario = parseInt(prompt("Adivina el número (0-100):"));
    numeroIntentos++;

    if (numeroUsuario > numeroObjetivo) {
      alert("El número es menor. Inténtalo de nuevo.");
    } else if (numeroUsuario < numeroObjetivo) {
      alert("El número es mayor. Inténtalo de nuevo.");
    }
  } while (numeroUsuario !== numeroObjetivo);

  alert(`Has adivinado el número, era ${numeroObjetivo}. Número de intentos: ${numeroIntentos}`);
}

adivinaNumero();