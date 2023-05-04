// Caso de problema asíncrono con datos externos
// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(data=>data.json())
//     .then (data=> console.log(data))
//     .catch(error =>  console.log(error));
// const pokemon = {
//     numero: data.id,
//     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
//     imgJuego: data.sprites.front_default,
//     imgCvg: data.sprites.other.dream_world.front_default,
//     nombre: data.name,
//     experiencia: data.base_experience,
//     hp: data.stats[0].base_stat,
//     ataque: data.stats[1].base_stat,
//     defensa: data.stats[2].base_stat,
//     especial: data.stats[3].base_stat,
// }
// console.log(pokemon);

//FUNCIÓN PARA LEER 1 POKEMON
const fetchData = async (id) => {
  //Para usar await la función tiene que usar async
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  const pokemon = {
    numero: data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    imgJuego: data.sprites.front_default,
    imgCvg: data.sprites.other.dream_world.front_default,
    nombre: data.name,
    experiencia: data.base_experience,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    especial: data.stats[3].base_stat,
  };
  console.log(pokemon);

  //Mostrar contenido
  document.getElementById("pokemons").innerHTML +=
    //document.write(
    `
                    <h3> Número: ${pokemon.numero} - ${pokemon.nombre}</h3>
                    <img src=${pokemon.img} alt="pokemon"/>
                    <p>HP: ${pokemon.hp} Ataque: ${pokemon.ataque} Defensa: ${pokemon.defensa}</p>
                `;
  //)
};

//FUNCIÓN PARA LEER LOS 9 PRIMEROS POKEMON
const fetchData2 = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`);
  const data = await res.json();
  console.log(data.results);
  let pokemon;
  //Recorrer cada pokemon
  document.getElementById("tabla").innerHTML += data.results.map((x, index) => {
    pokemon = {
      numero: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      nombre: x.name,
    };

    return `<tr>
                <td> ${pokemon.numero} </td> <td>${pokemon.nombre}</td> <td><img src=${pokemon.img} alt="pokemon"/></td>
            </tr>`;
  });
};
