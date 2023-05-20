let salir = "S";
let v=[9.98, 7.86, 4.53, 8.91, 5.76, 2.31];
let resultado = 0;
let suma = 0;
alert("Siguiendo este ejemplo, intenta calcular la media de los números de ese vector. Utilizar el bucle do-while para pedir opciones de un menú hasta la salida");

do{
    consulta=prompt("Introduce (1) para calcular la media, Introduce (2) para salir");
         switch(consulta){
             case '1':
                for (let i = 0;i<v.length;i++){
                    suma+=[i];
                }
            
                resultado = suma / v.length;
            
                alert("El resultado de la media es: "+resultado);
                 break;
             case '2':
                 salir = 'N'
                 break;
             default:
                 alert("No está esa operación en el listado");
         }
}while (salir!="N");