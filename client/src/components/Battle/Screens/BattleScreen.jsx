import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import { connect } from "react-redux";

import { useNavigate, useLocation } from 'react-router-dom';

import pokemon_data from "../Data/pokemon_data.js";
import moves_data from "../Data/moves_data";

import uniqid from "../Helpers/uniqid";
import randomInt from "../Helpers/randomInt";
import shuffleArray from "../Helpers/shuffleArray";

import { setOpponentTeam, setOpponentPokemon, setMove } from "../actions";
import CustomText from "../CustomText.jsx";
import HealthBar from "../HealthBar/HealthBar.jsx";


const BattleScreen = ({ setOpponentTeam, setOpponentPokemon }) => {

    const location = useLocation();
    const [opponentTeam, setOpposingTeam] = useState([])
    const [pokemon, setPokemon] = useState({})
    const [team, setTeam] = useState([{}])
    const [currentMenu, setCurrentMenu] = useState("main")

    let favorites = JSON.parse(localStorage.getItem('favorites'))
    console.log(favorites)
    favorites = favorites.map(item => {
        console.log(item.moves)

        item.moves = item.moves.filter(choosen_move => {
            if (choosen_move.chosen === true) {
                choosen_move = moves_data.filter(move => {
                    if (move.id === parseInt(choosen_move.id)) {
                        choosen_move.power = move.power
                        choosen_move.is_first = move.is_first
                        choosen_move.check = move.title
                    }
                    return choosen_move
                })
                return choosen_move
            }
        })

        item.back = pokemon_data[item.id - 1].back
        item.front = pokemon_data[item.id - 1].front
        item.current_hp = 500
        item.total_hp = 500

        return item
    })

    useEffect(() => {
        const random_pokemon_ids = [];
        for (let x = 0; x <= 5; x++) {
            random_pokemon_ids.push(randomInt(1, 54));
        }

        let opposing_team = pokemon_data.filter(item => {
            return random_pokemon_ids.indexOf(item.id) !== -1;
        });

        console.log(opposing_team)

        opposing_team = opposing_team.map(item => {
            let hp = 500;

            let shuffled_moves = shuffleArray(item.moves);
            let selected_moves = shuffled_moves.slice(0, 4);

            selected_moves = selected_moves.map(item => {
                return parseInt(item);
            });

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

        console.log(opposing_team)

        setOpposingTeam(opposing_team)

        setTeam(favorites)
        setPokemon(favorites[0])

        setOpponentTeam(opposing_team);
        setOpponentPokemon(opposing_team[0]);
    }, []);

    const SubMenuAttacks = () => {
        console.log("subMenuAttacks: ", pokemon)
        return(
            <>
                <div>
                {pokemon.moves.map((move, i) => {
                    if(i < 2)
                    return(
                    <button key={move.id}>{move.name}</button>)
                })}
                </div>
                <div>
                {pokemon.moves.map((move, i) => {
                    if (i >= 2)
                        return (
                            <button key={move.id}>{move.name}</button>)
                })}
                </div>

        </>)
    }

    const SubMenuSwitchPokemon = () => {
        console.log("subMenuSwitchPokemon: ", team)
        return (
            <>

                {team.map((pokemon) => {
                    return (
                        <div key={pokemon.id}>
                            <img src={pokemon.front} key={pokemon.id} alt={pokemon.name} /> 
                            <HealthBar label={pokemon.name} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                            <button >{pokemon.name}</button>
                        </div>
                    )
                })}
            </>)
    }

    const handleClick = (index) => {
        console.log("index: ", index)
        console.log(pokemon)
        switch (index) {
            case 0:
                setCurrentMenu("attacks")
            case 1:
                return null
            case 2:
                setCurrentMenu("switch")
            case 3:
                return null
            default:
                return Menu()
        }
    }

    const Menu = () => {
        return (
            <>
                <div>
                    <button onClick={() => handleClick(0)}>Attaques</button>
                    <button onClick={() => handleClick(1)}>Objets</button>
                </div>
                <div>
                    <button onClick={() => handleClick(2)}>Pokémon</button>
                    <button onClick={() => handleClick(3)}>Fuite</button>
                </div>
                
            </>
        )
    }

    const BattleScreen = ({
        team,
        move,
        move_display_text,
        pokemon,
        opponent_pokemon,
        backToMove
    }) => {
        return (
            
            <div >
                
                <CustomText>Fight!</CustomText>
                {console.log("battle team: ", team)}
                {console.log("opponent team: ", opponentTeam)}
                {console.log("opponent pokemon: ", opponent_pokemon)}

                <div>
                    {/* Code pour rendre l'interface utilisateur du Pokémon et du Pokémon adverse */}
                    {currentMenu !== "switch" &&
                
                    <div>
                        <div>
                            <HealthBar label={opponent_pokemon.label} currentHealth={opponent_pokemon.current_hp} totalHealth={opponent_pokemon.total_hp} />
                            <img src={opponent_pokemon.front} alt={opponent_pokemon.label} />
                        </div>
                        <div>
                            <HealthBar label={pokemon.name} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                            <img src={pokemon.back} alt={pokemon.name} />
                        </div>

                        </div>
                    }
                </div>

                <div >
                    {/* Code pour ajouter l'interface utilisateur des contrôles de combat */}
                    <div>
                        {currentMenu === "main" && <Menu />}   
                        {currentMenu === "attacks" && <SubMenuAttacks />}
                        {currentMenu === "switch" && <SubMenuSwitchPokemon />}
                        <button onClick={() => setCurrentMenu("main") }>Back</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h6">Battle Screen</Typography>
            {opponentTeam.length === 0 ? <div>loading...</div> : <BattleScreen team={favorites} pokemon={favorites[0]} opponent_pokemon={opponentTeam[0]} /> }
            
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

export default connect(null, mapDispatchToProps)(BattleScreen);
