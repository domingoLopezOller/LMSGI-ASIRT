function adivinaNumero() {
    //Número aleatorio entre 1 y 100
    var numero = Math.floor(Math.random() * 100) + 1;
    console.log(numero);
    var consulta, contador = 0;
    do {
        consulta = parseInt(prompt("Introduce un número o indica -1 para salir: ") || " ");
        if (consulta < numero && consulta != -1) {
            alert("El número es inferior al correcto");
        }
        else if (consulta > numero && consulta != -1) {
            alert("El número es superior al correcto");
        }
        else {
            consulta = -1;
        }
        contador++;
    } while (consulta != -1);
    alert("El número correcto es: " + numero + " y has realizado " + contador + " intentos.");
}
adivinaNumero();
