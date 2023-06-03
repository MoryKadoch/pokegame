import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import pokemon_data from "../Data/pokemon_data.js";
import moves_data from "../Data/moves_data";

import uniqid from "../Helpers/uniqid";
import randomInt from "../Helpers/randomInt";
import shuffleArray from "../Helpers/shuffleArray";

import { setOpponentTeam, setOpponentPokemon, setMove } from "../actions";


const BattleScreen = ({ setOpponentTeam, setOpponentPokemon }) => {
    useEffect(() => {
        const random_pokemon_ids = [];
        for (let x = 0; x <= 5; x++) {
            random_pokemon_ids.push(randomInt(1, 54));
        }

        let opposing_team = pokemon_data.filter(item => {
            return random_pokemon_ids.indexOf(item.id) !== -1;
        });

        opposing_team = opposing_team.map(item => {
            let hp = 500;

            let shuffled_moves = shuffleArray(item.moves);
            let selected_moves = shuffled_moves.slice(0, 4);

            let moves = moves_data.filter(item => {
                return selected_moves.indexOf(item.id) !== -1;
            });

            let member_id = uniqid();

            return {
                ...item,
                team_member_id: member_id,
                current_hp: hp,
                total_hp: hp,
                moves: moves,
                is_selected: false,
            };
        });

        // Mettez à jour le store avec l'équipe adverse et le Pokémon adverse actuel
        setOpponentTeam(opposing_team);
        setOpponentPokemon(opposing_team[0]);
    }, []);

    const BattleScreen = ({
        team,
        move,
        move_display_text,
        pokemon,
        opponent_pokemon,
        backToMove
    }) => {
        return (
            
            <div style={styles.container}>
                
                <CustomText styles={[styles.headerText]}>Fight!</CustomText>

                <div style={styles.battleGround}>
                    {/* Code pour rendre l'interface utilisateur du Pokémon et du Pokémon adverse */}
                </div>

                <div style={styles.controls}>
                    {/* Code pour ajouter l'interface utilisateur des contrôles de combat */}
                </div>
            </div>
        );
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h6">Battle Screen</Typography>
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        backToMove: () => {
            dispatch(setMove("select-move"));
        },
        setOpponentTeam: team => {
            dispatch(setOpponentTeam(team));
        },
        setOpponentPokemon: pokemon => {
            dispatch(setOpponentPokemon(pokemon));
        }
    };
};

// Connectez le composant à Redux en utilisant connect()

export default connect(null, mapDispatchToProps)(BattleScreen);
