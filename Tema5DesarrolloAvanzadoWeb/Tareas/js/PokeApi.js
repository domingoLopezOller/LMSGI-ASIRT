const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data);
    });
}

let i = 0;
let pokemon = 0;
const vectorial = [];
let count = 0;
let encontrado = 0;

while (i < 6) {
    pokemon = Math.floor(Math.random() * 10) +1;
    encontrado = 0;
    for (count = 0;count<vectorial.length;count++){
        if (vectorial[count] == pokemon){
            encontrado = 1;
        }
    }

    if (encontrado == 0){
        fetchPokemon(pokemon);
        vectorial.push(pokemon);
        i = i + 1;
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
};