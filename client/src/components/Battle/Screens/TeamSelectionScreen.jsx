import React from "react";
import { connect } from "react-redux";

import { setTeam, setPokemon } from "../actions";
import moves_data from "../data/moves_data";

import CustomText from "../components/CustomText";
import PokemonList from "../components/PokemonList";
import ActionList from "../components/ActionList";

import uniqid from "../helpers/uniqid";
import shuffleArray from "../helpers/shuffleArray";

const TeamSelectionScreen = ({ selected_pokemon, setTeam, setCurrentPokemon }) => {
    const confirmTeam = () => {
        /*
        todo:
        - extract selected pokemon, function for setting the team, and function for setting current Pokemon from props
        - construct an array containing the Pokemon data for the selected team
        - dispatch action for setting team
        - dispatch action for setting current Pokemon
        */
    };

    return (
        <div style={styles.container}>
            <CustomText>Team Selection Screen</CustomText>
        </div>
    );
};

const mapStateToProps = ({ team_selection }) => {
    const { pokemon, selected_pokemon } = team_selection;

    // return pokemon and selected_pokemon as props for this component
    return {
        pokemon, // all the Pokemon available for selection (a copy of src/data/pokemon_data.js)
        selected_pokemon // array of selected Pokemon
    };
};

const mapDispatchToProps = dispatch => {
    // for updating the value of team and pokemon in src/reducers/BattleReducer.js
    return {
        setTeam: team => {
            dispatch(setTeam(team));
        },
        setPokemon: pokemon => {
            dispatch(setPokemon(pokemon));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelectionScreen);

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 10,
        alignSelf: "center",
    },
    confirmButton: {
        padding: 10,
        alignSelf: "center",
        marginBottom: 10,
        backgroundColor: "#95ff84",
    },
    loadingContainer: {
        alignItems: "center",
    },
    messageText: {
        fontSize: 13,
        color: "#676767",
    },
};
