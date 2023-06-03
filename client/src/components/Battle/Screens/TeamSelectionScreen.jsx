import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { setTeam, setPokemon } from "../Actions";
import moves_data from "../Data/moves_data";
import pokemon_data from "../Data/pokemon_data";

import CustomText from "../CustomText";
import PokemonList from "../PokemonList";
import ActionList from "../ActionList";

import uniqid from "../Helpers/uniqid";
import shuffleArray from "../Helpers/shuffleArray";

const TeamSelectionScreen = ({ selected_pokemon, setTeam, setPokemon, navigation }) => {
    const confirmTeam = () => {
        let team = [...selected_pokemon]; // the array which stores the data for the Pokemon team selected by the user

        team = team.map(item => {
            let hp = 500; // the total health points given to each Pokemon

            let shuffled_moves = shuffleArray(item.moves);
            let selected_moves = shuffled_moves.slice(0, 4);

            let moves = moves_data.filter(item => {
                return selected_moves.indexOf(item.id) !== -1;
            });

            let member_id = uniqid();

            return {
                ...item,
                team_member_id: member_id, // unique ID for identifying each Pokemon in the team
                current_hp: hp, // current HP. This gets updated when an opponent Pokemon attacks
                total_hp: hp,
                moves: moves,
                is_selected: false // no longer needed
            };
        });

        setTeam(team);
        setPokemon(selected_pokemon);

    };

    const navigateTo = useNavigate();

    const handleConfirm = () => {
            navigateTo('/battle')
    };

    return (
        <div style={styles.container}>
            <CustomText styles={styles.headerText}>Select your team</CustomText>
            {console.log(selected_pokemon)}
            {selected_pokemon.length === 6 && (
                <div>
                    <button style={styles.confirmButton} onClick={handleConfirm}>
                        <CustomText>Confirm Selection</CustomText>
                    </button>
                </div>
            )}
            <PokemonList
                data={pokemon_data}
                numColumns={1}
                action_type={"select-pokemon"}
            />
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
};
