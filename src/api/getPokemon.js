import axios from "../Service/axios";

const getPokemons = (limit = 151) =>
  axios
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

const getPokemonWithDetails = () => {
  return getPokemons()
    .then((res) => {
      const pokemons = res.results;
      return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url)));
      // dispatch(setPokemonsAction(res.results));
    })
    .then((pokemonResponses) => {
      return pokemonResponses.map((response) => response.data);
    });
};
export { getPokemonWithDetails, getPokemons };
