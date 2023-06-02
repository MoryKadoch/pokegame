import {
    SELECT_POKEMON,
    SET_POKEMON,
    SET_TEAM
} from "./types";

export const selectPokemon = (id, pokemon_data, is_selected) => { // accepts the Pokemon ID, Pokemon object, and a boolean representing whether it's selected or not
    return {
        type: SELECT_POKEMON,
        id,
        pokemon_data,
        is_selected
    };
};

export const setPokemon = pokemon => { // accepts a single Pokemon object
    return {
        type: SET_POKEMON,
        pokemon
    };
};

export const setTeam = team => { // accepts an array of Pokemon object data (same as the ones you find in src/data/pokemon_data.js)
    return {
        type: SET_TEAM,
        team
    };
};
