import { call, put, takeEvery } from "redux-saga/effects";
import { setError, setPokemon } from "../actions";
import { getPokemons, getPokemonWithDetails } from "../api/getPokemon";
import {
  CLEAR_ERROR,
  FETCH_POKEMON_DETAIL,
  SET_ERROR,
  SET_POKEMON,
} from "./../actions/type";
function* fetchPokemonsWithDetails(action) {
  try {
    const pokemonsWithDetails = yield call(
      getPokemonWithDetails,
      action.payload
    );
    yield put(setPokemon(pokemonsWithDetails));
  } catch (e) {
    yield put(setError({ message: "Error al obtener detalles", error: e }));
  }
}

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMON_DETAIL, fetchPokemonsWithDetails);
}

export { pokemonSaga };
