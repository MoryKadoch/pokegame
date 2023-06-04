import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Button, Typography, CardActions, Box } from '@material-ui/core';
import { connect } from "react-redux";

import { useNavigate, useLocation } from 'react-router-dom';

import pokemon_data from "../Data/pokemon_data.js";
import moves_data from "../Data/moves_data";

import uniqid from "../Helpers/uniqid";
import randomInt from "../Helpers/randomInt";
import shuffleArray from "../Helpers/shuffleArray";

import { setOpponentTeam, setOpponentPokemon, setMove } from "../Actions";
import CustomText from "../CustomText.jsx";
import HealthBar from "../HealthBar/HealthBar.jsx";
import getMoveEffectivenessAndDamage from "../Helpers/getMoveEffectivenessAndDamage";

const BattleScreen = ({ setOpponentTeam, setOpponentPokemon }) => {

    const location = useLocation();
    const [opponentTeam, setOpposingTeam] = useState([])
    const [opponentPokemon, setOpposingPokemon] = useState({})
    const [pokemon, setPokemon] = useState({})
    const [team, setTeam] = useState([{}])
    const [currentMenu, setCurrentMenu] = useState("main")
    const [currentMessage, setCurrentMessage] = useState("")

    let favorites = JSON.parse(localStorage.getItem('favorites'))
    //console.log(favorites)
    favorites = favorites.map(item => {
        //console.log(item.moves)

        item.moves = item.moves.filter(choosen_move => {
            if (choosen_move.chosen === true) {
                choosen_move = moves_data.filter(move => {
                    if (move.id === parseInt(choosen_move.id)) {
                        choosen_move.power = move.power
                        choosen_move.is_first = move.is_first
                        choosen_move.check = move.title
                        choosen_move.type = move.type
                    }
                    return choosen_move
                })
                return choosen_move
            }
        })

        item.back = pokemon_data[item.id - 1].back
        item.front = pokemon_data[item.id - 1].front
        item.current_hp = pokemon_data[item.id - 1].hp
        item.total_hp = pokemon_data[item.id - 1].hp
        item.speed = pokemon_data[item.id - 1].speed
        item.type_defenses = pokemon_data[item.id - 1].type_defenses

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

        //console.log(opposing_team)

        opposing_team = opposing_team.map(item => {
            let hp = pokemon_data[item.id - 1].hp;
            let speed = pokemon_data[item.id - 1].speed;

            let shuffled_moves = shuffleArray(item.moves);
            let selected_moves = shuffled_moves.slice(0, 4);

            selected_moves = selected_moves.map(item => {
                return parseInt(item);
            });

            let moves = moves_data.filter(item => {
                return selected_moves.indexOf(item.id) !== -1;
            });

            let label = item.label;
            let member_id = uniqid();

            return {
                ...item,
                team_member_id: member_id,
                name: label,
                current_hp: hp,
                total_hp: hp,
                speed: speed,
                moves: moves,
                is_selected: false,
            };
        });



        // Mettez à jour le store avec l'équipe adverse et le Pokémon adverse actuel

        setOpposingTeam(opposing_team)
        setTeam(favorites)

        setPokemon(favorites[0])
        setOpposingPokemon(opposing_team[0])

        console.log(opponentPokemon)

        //setOpponentTeam(opposing_team);
        //setOpponentPokemon(opposing_team[0]);

        debutCombat(favorites[0], opposing_team[0])

        //Message = `${opponentPokemon.label} est envoyé au combat.`
        //showLetter(Message, 500*3)

        //Message = "Que voulez-vous faire ?"
        //showLetter(Message, 500*4)


    }, []);

    const debutCombat = (pokemon, ennemyPokemon) => {
        const waitTime = 350

        let Message = "Un combat a commencé !"
        showLetter(Message, waitTime)

        console.log("combat: ", pokemon.name, " vs ", ennemyPokemon.label)

        setTimeout(() => {
            Message = `${pokemon.name} est envoyé au combat.`
            showLetter(Message, waitTime)
        }, waitTime * 6)

        setTimeout(() => {
            Message = `${ennemyPokemon.label} est envoyé au combat.`
            showLetter(Message, waitTime)
        }, waitTime * 15)

        setTimeout(() => {
            Message = "Que voulez-vous faire ?"
            showLetter(Message, waitTime)
        }, waitTime * 25)

        //Message = "Que voulez-vous faire ?"
        //showLetter(Message, 500*4)
    }

    const SubMenuAttacks = () => {
        return (
            <Grid container spacing={2}>
                {pokemon.moves.map((move, i) => (
                    <Grid item xs={6} key={move.id}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => handleAttack(move)}
                        >
                            {move.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        )
    }

    const getNextPokemon = () => {
        let nextPokemon = team.filter(item => {
            if (item.current_hp > 0) {
                return item
            }
        })

        if (nextPokemon.length === 0) {
            setTimeout(() => {
                let Message = "Vous n'avez plus de Pokémon en état de combattre."
                showLetter(Message, 350)

                setCurrentMenu("end")
            }, 350 * 25)
        }
        else
            setTimeout(() => {
                setPokemon(nextPokemon[0])
                let Message = `${nextPokemon[0].name} est envoyé au combat.`
                showLetter(Message, 350)
            }, 350 * 25)
    }

    function showLetter(text, delay) {
        text.substring(0, 1);
        for (var i = 2; i <= text.length; i++) {
            (function (i) {
                setTimeout(function () {
                    setCurrentMessage(text.substring(0, i));
                }, (delay = delay + 100));
            })(i)
        }
    }

    const getNextOpponentPokemon = () => {
        let nextPokemon = opponentTeam.filter(item => {
            if (item.current_hp > 0) {
                return item
            }
        })

        if (nextPokemon.length === 0) {
            setTimeout(() => {
                let Message = "Vous avez gagné !"
                showLetter(Message, 350)
                setCurrentMenu("end")
            }, 350 * 25)
        }

        else
            setTimeout(() => {
                setOpposingPokemon(nextPokemon[0])
                let Message = `${nextPokemon[0].label} est envoyé au combat.`
                showLetter(Message, 350)
            }, 350 * 25)
    }

    const attack = (move) => {
        let power = getMoveEffectivenessAndDamage(move, opponentPokemon)
        let Message = `${pokemon.name} attaque ${move.name} et inflige ${power.damage} points de dégâts.`
        showLetter(Message, 350)

        setTimeout(() => {
            console.log(power.effectiveness)
            Message = `${power.effectiveness}`
            showLetter(Message, 350)
        }, 350 * 7)

        let life = opponentPokemon.current_hp - power.damage
        let opponent = opponentPokemon
        opponent.current_hp = life

        if (opponent.current_hp <= 0) {
            opponent.current_hp = 0
        }

        if (opponentPokemon.current_hp <= 0) {
            setTimeout(() => {
                console.log(power.effectiveness)
                Message = `${opponentPokemon.name} est KO.`
                showLetter(Message, 350)
            }, 350 * 15)

            getNextOpponentPokemon()

        }

        setCurrentMenu("main")

        console.log(opponentPokemon)
    }

    const opponentAttack = () => {
        let opponentMove = randomInt(0, opponentPokemon.moves.length)
        console.log("choosed move: ", opponentPokemon.moves[opponentMove])

        let power = getMoveEffectivenessAndDamage(opponentPokemon.moves[opponentMove], pokemon)

        let Message = `${opponentPokemon.label} attaque ${opponentPokemon.moves[opponentMove].title} et inflige ${power.damage} points de dégâts.`
        showLetter(Message, 350)

        setTimeout(() => {
            console.log(power.effectiveness)
            Message = `${power.effectiveness}`
            showLetter(Message, 350)
        }, 350 * 7)

        let life = pokemon.current_hp - power.damage
        let opponent = pokemon
        opponent.current_hp = life

        if (opponent.current_hp <= 0) {
            opponent.current_hp = 0
        }

        if (pokemon.current_hp <= 0) {
            setTimeout(() => {
                console.log(power.effectiveness)
                Message = `${pokemon.name} est KO.`
                showLetter(Message, 350)
            }, 350 * 15)

            getNextPokemon()
        }
    }


    const handleAttack = (move) => {
        let opponentMove = randomInt(0, opponentPokemon.moves.length)
        console.log("choosed move: ", opponentPokemon.moves[opponentMove])

        let power = getMoveEffectivenessAndDamage(move, opponentPokemon)

        let power_opponent = getMoveEffectivenessAndDamage(opponentPokemon.moves[opponentMove], pokemon)

        if (move.is_first === true) {
            attack(move)
            setTimeout(() => {

                opponentAttack()
            }, 350 * 25)
        }
        else if (pokemon.speed > opponentPokemon.speed) {
            attack(move)
            setTimeout(() => {
                opponentAttack()
            }, 350 * 25)
        }

        else {
            console.log("damage: ", power_opponent.damage)
            let Message = `${opponentPokemon.label} attaque ${opponentPokemon.moves[opponentMove].title}`
            //et inflige ${ power_opponent.damage } points de dégâts.`
            showLetter(Message, 350)

            setTimeout(() => {
                console.log(power_opponent.effectiveness)
                Message = `${power_opponent.effectiveness}`
                showLetter(Message, 350)
            }, 350 * 7)

            let life = pokemon.current_hp - power_opponent.damage
            let playerPokemon = pokemon
            playerPokemon.current_hp = life

            if (playerPokemon.current_hp <= 0) {
                playerPokemon.current_hp = 0
            }

            setPokemon(playerPokemon)

            if (pokemon.current_hp <= 0) {
                setTimeout(() => {
                    console.log(power_opponent.effectiveness)
                    Message = `${pokemon.name} est KO.`
                    showLetter(Message, 350)

                }, 350 * 15)

                getNextPokemon()

            }

            setCurrentMenu("main")

            console.log("attack: ", pokemon)
        }
    }

    const SubMenuSwitchPokemon = () => {
        //console.log("subMenuSwitchPokemon: ", team)
        return (
            <>

                {team.map((pokemon) => {
                    return (
                        <div key={pokemon.id}>
                            <img src={pokemon.front} key={pokemon.id} alt={pokemon.name} />
                            <HealthBar label={pokemon.name} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                            <Button variant="contained" color="primary" fullWidth>{pokemon.name}</Button>
                        </div>
                    )
                })}
            </>
        )
    }

    const handleClick = (index) => {
        //console.log("index: ", index)
        //console.log(pokemon)
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
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleClick(0)}>Attaques</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleClick(1)}>Objets</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleClick(2)}>Pokémon</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleClick(3)}>Fuite</Button>
                </Grid>
            </Grid>
        )
    }

    const Answers = () => {

        return (
            <div> {currentMessage} </div>)
    }

    const BattleScreen = ({
        team,
        move,
        move_display_text,
        opponent_pokemon,
        backToMove
    }) => {
        return (

            <div style={{ width: "70%", margin: "0 auto", backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "10px", marginBottom: "20px", marginTop: "20px" }}>


                {/*{console.log("battle team: ", team)}*/}
                {/*{console.log("opponent team: ", opponentTeam)}*/}
                {/*{console.log("opponent pokemon: ", opponentPokemon)}*/}

                <div style={{ width: "70%", margin: "0 auto" }}>
                    {/* Code pour rendre l'interface utilisateur du Pokémon et du Pokémon adverse */}
                    {currentMenu !== "switch" && currentMenu !== "end" &&

                        <div>
                            <div style={{ textAlign: "right", float: "right", padding: "10px", borderRadius: "10px" }}>
                                <HealthBar label={opponentPokemon.label.toUpperCase()} currentHealth={opponentPokemon.current_hp} totalHealth={opponentPokemon.total_hp} />
                                <img src={opponentPokemon.front} alt={opponentPokemon.label} />
                            </div>
                            {/*<CustomText>Fight!</CustomText>*/}
                            <div>
                                <HealthBar label={pokemon.name.toUpperCase()} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                                <img src={pokemon.back} alt={pokemon.name} />
                            </div>

                        </div>
                    }
                </div>

                <div style={{ width: "70%", margin: "0 auto", marginTop: "10%", marginBottom: "10%" }}>
                    {/* Code pour ajouter l'interface utilisateur des contrôles de combat */}
                    <div>
                        <Answers />
                    </div>

                    <div>
                        {currentMenu === "main" && currentMenu !== "end" && <Menu />}
                        {currentMenu === "attacks" && currentMenu !== "end" && <SubMenuAttacks />}
                        {currentMenu === "switch" && currentMenu !== "end" && <SubMenuSwitchPokemon />}
                        {currentMenu !== "main" && currentMenu !== "end" && <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => setCurrentMenu("main")}>Back</Button>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            {opponentTeam.length === 0 ? <div>loading...</div> : <BattleScreen team={favorites} />}

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
