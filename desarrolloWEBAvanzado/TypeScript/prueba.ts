interface PersonData {
    name: string;
    weight? : number;//opcional
    age: number;
    hairColor? : string; //opcional
    height: number;
  }
  
  function datosPersona(person: PersonData) {
      return `La persona se llama ${person.name}, tiene ${person.age} años y mide ${person.height} cm`;
  }
  
  let persona = {
      name: 'John Doe',
      age: 25,
      height: 170,
  };
  
  console.log(datosPersona(persona));

const array:number[] = [1, 2, 3, 4];
console.log(`La suma de los elementos del array es: ${array.reduce((a, b) => a + b)}`); 

var stringsearch:string = "o" ,str:string = "Texto donde buscar";
    let count:number=0;
    for(let i:number=0; i<str.length; count+=+(stringsearch===str[i++]));
console.log(count);

