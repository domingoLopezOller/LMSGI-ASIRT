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
  
  //Sacar datos con formato Bootstrap
  const fetchDataBootstrap = async (id) => {
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
    document.getElementById("pokemonsBootstrap").innerHTML +=`
      <div class="card" style="width:400px">
        <img class="card-img-top" src="${pokemon.img}" alt="Card image" style="width:100%">
        <div class="card-body">
          <h3 class="card-title"><strong>${pokemon.nombre}</strong></h3>
          <p class="card-text">
            <p>Número: ${pokemon.numero}</p>
            <p>HP: ${pokemon.hp} </p>
            <p>Ataque: ${pokemon.ataque}</p>
            <p>Defensa:${pokemon.defensa}</p>
          </p>
          <a href="https://www.wikidex.net/wiki/${pokemon.nombre}" class="btn btn-primary" target="_blanck">Wikidex</a>
        </div>
      </div>
      `;
  };