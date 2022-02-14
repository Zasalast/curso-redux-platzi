import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { PokemonCard } from "./PokemonCard";

import "./style.css";

function PokemonList() {
  const { list } = useSelector((state) => ({
    list: state.list,
  }));
  return (
    <Grid className="PokemonList">
      <h1>PokemonList </h1>
      {list.map((pokemon, key) => {
        return <PokemonCard pokemon={pokemon} key={`pokemon-${key}`} />;
      })}
    </Grid>
  );
}

export { PokemonList };
