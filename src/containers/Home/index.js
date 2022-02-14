import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //new line
/* import { getPokemons } from "../../api/getPokemon"; */
import { PokemonList } from "../../components/Pokemon/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";
import {
  fetchPokemonDetails,
  /* getPokemonWithDetails, */
  setError,
  setPokemon as setPokemonsAction,
} from "../../actions/index";
import axios from "axios";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    /* dispatch(getPokemonWithDetails()); */
    dispatch(fetchPokemonDetails());
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
