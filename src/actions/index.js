/* import axios from "axios";
import { getPokemons } from "../api/getPokemon"; */
import {
  SET_POKEMON,
  SET_ERROR,
  CLEAR_ERROR,
  FETCH_POKEMON_DETAIL,
} from "./type";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});
export const fetchPokemonDetails = (payload) => ({
  type: FETCH_POKEMON_DETAIL,
  payload,
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});
/* export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemons = res.results;
      return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url)));
      // dispatch(setPokemonsAction(res.results));
    })
    .then((pokemonResponses) => {
      const pokemonsWithDetails = pokemonResponses.map(
        (response) => response.data
      );
      dispatch(setPokemon(pokemonsWithDetails));
    })
    .catch((error) => {
      dispatch(setError({ message: "Ocurrió un error", error }));
    });
};
 */
