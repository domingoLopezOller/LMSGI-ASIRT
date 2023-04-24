function datosPersona(person) {
    return "La persona se llama ".concat(person.name, ", tiene ").concat(person.age, " a\u00F1os y mide ").concat(person.height, " cm");
}
var persona = {
    name: 'John Doe',
    age: 25,
    height: 170,
};
console.log(datosPersona(persona));
var array = [1, 2, 3, 4];
console.log("La suma de los elementos del array es: ".concat(array.reduce(function (a, b) { return a + b; })));
var stringsearch = "o", str = "Texto donde buscar";
var count = 0;
for (var i = 0; i < str.length; count += +(stringsearch === str[i++]))
    ;
console.log(count);
