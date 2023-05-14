
const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemonCard(data);
    });
}

function generateRandomPokemon() {
  const vectorial = [];
  let i = 0;

  while (i < 6) {
    const pokemonId = Math.floor(Math.random() * 600) + 1;

    if (!vectorial.includes(pokemonId)) {
      vectorial.push(pokemonId);
      fetchPokemon(pokemonId);
      i++;
    }
  }
}

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

window.addEventListener('load', generateRandomPokemon);
