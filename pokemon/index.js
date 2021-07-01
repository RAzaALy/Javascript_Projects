const pokeContainer = document.getElementById("pokeContainer");
const pokemonCount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  buh: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);
// console.log(mainTypes);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  createPokeCard(data);
};
const createPokeCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const { id, name, types } = pokemon;
  const nme = name[0].toUpperCase() + name.slice(1);
  const ID = id.toString().padStart(3, 0);
  // console.log(types);
  const pokeTypes = types.map((type) => type.type.name);
//   console.log(pokeTypes);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;
  pokemonEl.innerHTML = `
    <div class="imgContainer">
        <img 
        src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"
        alt="pokemon"
        />
     </div>
     <div class="info">
       <span class="number">#${ID}</span>
       <h3 class="name">${nme}</h3>
       <small class="type">Type:<span><strong> ${type}</strong></span></small>
     </div>
    `;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
