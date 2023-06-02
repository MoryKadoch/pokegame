import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import CustomText from "../components/CustomText";
import PokemonFullSprite from "../components/PokemonFullSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import PokemonList from "../components/PokemonList";

// todo: import Pokemon and moves data

// todo: import helper functions

// todo: import actions

const BattleScreen = () => {
    useEffect(() => {
        /*
        todo:
        - extract navigation props
        - extract props passed from mapStateToProps
        - extract functions added via mapDispatchToProps
    
        - construct random opponent team data
        - dispatch action to set opponent team
        - dispatch action to set current opponent Pokemon
        */
    }, []);

    /*
    todo:
    - extract props passed using mapStateToProps, as well as navigation props
    - render opponent's current Pokemon
    - render current user's Pokemon
    - selectively render currently displayed message (e.g. Pikachu used Thunder! It's super effective.)
    - selectively render action buttons (fight or switch Pokemon)
    - selectively render Pokemon list
    - selectively render Pokemon moves list
    */

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h6">Battle Screen</Typography>
        </Box>
    );
};

/*
todo: add mapStateToProps
  - team
  - move
  - move_display_text
  - message
  - pokemon
  - opponent_team
  - opponent_pokemon
*/

/*
todo: add mapDispatchToProps

  - backToMove
  - setOpponentTeam
  - setOpponentPokemon
  - setMessage
  - setPokemonHealth
  - setMove
  - removePokemonFromTeam
  - removePokemonFromOpposingTeam
*/

export default BattleScreen; // todo: turn component into a connected component
