import React from "react";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import a1 from "./132.png";
import { MAIN_COLOR, FAV_COLOR } from "./../../utils/constants";
import "./style.css";
function PokemonCard({ pokemon, key }) {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image centered src={pokemon.sprites.front_default} />
        {console.log(pokemon)}
        <h2 className="PokemonCard-title">{pokemon.name}</h2>
        <Divider />

        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR}>{type.type.name}</Label>
        ))}
      </div>
    </Grid.Column>
  );
}

export { PokemonCard };
