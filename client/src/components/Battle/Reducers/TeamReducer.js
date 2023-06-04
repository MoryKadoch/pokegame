import { SELECT_POKEMON } from "../Actions/types"
import pokemon_data from "../Data/pokemon_data"

import { connect } from "react-redux";

import { setTeam, setPokemon } from "../Actions";
import moves_data from "../Data/moves_data";


const INITIAL_STATE = {
    pokemon: pokemon_data,
    selected_pokemon: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_POKEMON:
            let pokemon = [...state.pokemon]
            let selected_pokemon = [...state.selected_pokemon]

            const is_selected = action.is_selected

            if (state.selected_pokemon.length < 6 || is_selected) {
                pokemon = pokemon.map(p => {
                    if (p.id === action.id) {
                        p.is_selected = !is_selected
                    }
                    return p
                }
                )
            }

            if (is_selected) {
                const index_to_remove = selected_pokemon.findIndex(p => p.id === action.id)
                selected_pokemon.splice(index_to_remove, 1)
            }
            else {
                selected_pokemon.push(action.pokemon_data)
            }

            return { ...state, pokemon, selected_pokemon };

        default:
            return state;
            
    }
}

