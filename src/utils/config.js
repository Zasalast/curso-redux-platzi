import axios from "axios";

const URLPOKEMONAPI = process.env.POKEMONAPI || "https://pokeapi.co/api/v2/";

const axiosInstance = axios.create({
  baseURL: URLPOKEMONAPI,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
export { URLPOKEMONAPI, axiosInstance };
