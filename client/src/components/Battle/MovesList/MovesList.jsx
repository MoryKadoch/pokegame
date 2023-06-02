import React from 'react';
import { connect } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import { setOpponentPokemonHealth, removePokemonFromOpponentTeam, setOpponentPokemon, setMessage, setMove } from '../actions';
import CustomText from '../CustomText';

const MovesList = ({
    moves,
    setOpponentPokemonHealth,
    removePokemonFromOpponentTeam,
    setOpponentPokemon,
    setMessage,
    setMove,
}) => {
    const handleMovePress = (item) => {
        /*
        todo:
        - dispatch action for setting message to display in the message box
        - dispatch action for updating the health of the opponent's current Pokemon
        - if opponent Pokemon's health goes below 1, dispatch action for removing opponent's current Pokemon from their team
        */
    };

    return (
        <Grid container spacing={1}>
            {moves.map((item) => (
                <Grid item key={item.id} xs={6}>
                    <TouchableOpacity style={styles.container} onPress={() => handleMovePress(item)}>
                        <CustomText styles={styles.label}>{item.title}</CustomText>
                    </TouchableOpacity>
                </Grid>
            ))}
        </Grid>
    );
};

const styles = {
    container: {
        width: 130,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffd43b',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
    },
};

const mapStateToProps = (state) => ({
    moves: state.moves,
    opponent_team: state.opponent_team,
    pokemon: state.pokemon,
    opponent_pokemon: state.opponent_pokemon,
});

const mapDispatchToProps = {
    setOpponentPokemonHealth,
    removePokemonFromOpponentTeam,
    setOpponentPokemon,
    setMessage,
    setMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovesList);