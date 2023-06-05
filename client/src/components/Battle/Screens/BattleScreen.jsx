import React, { useEffect, useState, useRef } from "react";
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

import background from "../../../assets/battleBackground.png"
import battleMusic from "../../../assets/battle-loop.mp3"
import battleIntro from "../../../assets/battle-intro.mp3"

import '../../../assets/PKMN_RBYGSC.ttf'
import "./battleScreen.css"

const BattleScreen = ({ setOpponentTeam, setOpponentPokemon }) => {

    const location = useLocation();
    const [opponentTeam, setOpposingTeam] = useState([])
    const [opponentPokemon, setOpposingPokemon] = useState({})
    const [pokemon, setPokemon] = useState({})
    const [team, setTeam] = useState([{}])
    const [currentMenu, setCurrentMenu] = useState("main")
    const [currentMessage, setCurrentMessage] = useState("")
    const Music = useRef(undefined)
    const [isWriting, setIsWriting] = useState(false)

    /*const musicRef = useRef(new Audio(battleMusic))*/

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

        item.cry = new Audio(`https://play.pokemonshowdown.com/audio/cries/${item.name.replace('-', '')}.mp3`)
        item.back = pokemon_data[item.id - 1].back
        item.front = pokemon_data[item.id - 1].front
        item.current_hp = pokemon_data[item.id - 1].hp
        item.total_hp = pokemon_data[item.id - 1].hp
        item.speed = pokemon_data[item.id - 1].speed
        item.type_defenses = pokemon_data[item.id - 1].type_defenses

        return item
    })

    useEffect(() => {
        setState()

        return () => {
            if (Music.current) {
                Music.current.removeEventListener("ended",launchLoop ,false);
                Music.current.pause();
            }
        };
    }, []);

    const launchLoop = () => {
        Music.current = new Audio(battleMusic)
        Music.current.play()
        Music.current.loop = true
    }

    // retour a l'état initial
    const setState = () => {
        if (Music.current) {
            Music.current.pause()
        }
        
        Music.current = new Audio(battleIntro)
        Music.current.play()
        Music.current.addEventListener('ended', launchLoop, false);

        const random_pokemon_ids = [];
        for (let x = 0; x <= 5; x++) {
            random_pokemon_ids.push(randomInt(1, 150));
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

            let cry = new Audio(`https://play.pokemonshowdown.com/audio/cries/${item.label.replace('-', '')}.mp3`)

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
                cry: cry,
                name: label,
                current_hp: hp,
                total_hp: hp,
                speed: speed,
                moves: moves,
                is_selected: false,
            };
        });

        setOpposingTeam(opposing_team)
        setTeam(favorites)

        setPokemon(favorites[0])
        setOpposingPokemon(opposing_team[0])

        setCurrentMenu("main")

        console.log(opponentPokemon)

        debutCombat(favorites[0], opposing_team[0])
    }

    // opening combat
    const debutCombat = (pokemon, ennemyPokemon) => {
        const waitTime = 350
        setIsWriting(true)
        let Message = "Un combat a commencé !"
        showLetter(Message, waitTime)

        console.log("combat: ", pokemon.name, " vs ", ennemyPokemon.label)

        setTimeout(() => {
            Message = `${pokemon.name.toUpperCase() } est envoyé au combat.`
            showLetter(Message, waitTime)

            pokemon.cry.play()

        }, waitTime * 6)

        setTimeout(() => {
            Message = `${ennemyPokemon.label.toUpperCase() } est envoyé au combat.`
            showLetter(Message, waitTime)

            ennemyPokemon.cry.play()

        }, waitTime * 15)

        setTimeout(() => {
            Message = "Que voulez-vous faire ?"
            showLetter(Message, waitTime)
        }, waitTime * 25)

        setTimeout(() => {
            setIsWriting(false)
        }, waitTime * 30)

        //Message = "Que voulez-vous faire ?"
        //showLetter(Message, 500*4)
    }

    // menu attaques
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

    // gestion mise KO pokemon joueur
    const getNextPokemon = () => {
        let nextPokemon = team.filter(item => {
            if (item.current_hp > 0) {
                return item
            }
        })

        if (nextPokemon.length === 0) {
            setIsWriting(true)
            setTimeout(() => {
                let Message = "Vous n'avez plus de Pokémon en état de combattre."
                showLetter(Message, 350)

                setCurrentMenu("end")
            }, 350 * 25)

            setTimeout(() => {
                setIsWriting(false)
            }, 350 * 40)

        }
        else {
            setIsWriting(true)

            setTimeout(() => {
                setPokemon(nextPokemon[0])
                let Message = `${nextPokemon[0].name.toUpperCase() } est envoyé au combat.`
                showLetter(Message, 350)

                nextPokemon[0].cry.play()
            }, 350 * 35)

            setTimeout(() => {
                setIsWriting(false)
            }, 350 * 50)
        }
            


    }

    //gestion du défilement des messages
    function showLetter(text, delay) {
        
        text.substring(0, 1);
        for (var i = 2; i <= text.length; i++) {
            (function (i) {
                setTimeout(function () {
                    setCurrentMessage(text.substring(0, i));
                }, (delay = delay + 50));
            })(i)
        }
    }

    // gestion mise KO pokemon adverse
    const getNextOpponentPokemon = () => {
        let nextPokemon = opponentTeam.filter(item => {
            if (item.current_hp > 0) {
                return item
            }
        })


        if (nextPokemon.length === 0) {
            setIsWriting(true)
            setTimeout(() => {
                let Message = "Vous avez gagné !"
                showLetter(Message, 350)
                setCurrentMenu("end")
            }, 350 * 25)

            setTimeout(() => {
                setIsWriting(false)
            }, 350 * 40)
        }

        else {
            setIsWriting(true)
            setTimeout(() => {

                setOpposingPokemon(nextPokemon[0])
                let Message = `${nextPokemon[0].label.toUpperCase() } est envoyé au combat.`
                showLetter(Message, 350)

                nextPokemon[0].cry.play()
            }, 350 * 35)

            setTimeout(() => {
                setIsWriting(false)
            }, 350 * 50)
        }
            
    }

    // gestion des attaques joueur

    const attack = (move) => {
        let waitTime = 350
        let waitMult = 15

        setIsWriting(true)

        let power = getMoveEffectivenessAndDamage(move, opponentPokemon)
        let Message = `${pokemon.name.toUpperCase()} attaque ${move.name.toUpperCase() }`
        showLetter(Message, waitTime)

        setTimeout(() => {
            console.log(power.effectiveness)
            Message = `${power.effectiveness}`
            showLetter(Message, waitTime)
        }, waitTime * waitMult)

        let life = opponentPokemon.current_hp - power.damage
        let opponent = opponentPokemon
        opponent.current_hp = life

        if (opponent.current_hp <= 0) {
            opponent.current_hp = 0
        }

        if (opponentPokemon.current_hp <= 0) {
            setTimeout(() => {
                console.log(power.effectiveness)
                Message = `${opponentPokemon.name.toUpperCase() } est KO.`
                showLetter(Message, waitTime)
            }, waitTime * (waitMult * 1.5))

            getNextOpponentPokemon()

        }

        setTimeout(() => {
            setIsWriting(false)
        }, waitTime * (waitMult * 3.5))

        setCurrentMenu("main")

        console.log(opponentPokemon)
    }

    // gestion des attaques adverses

    const opponentAttack = (selected_pokemon) => {
        let waitTime = 350
        let waitMult = 15

        let opponentMove = randomInt(0, opponentPokemon.moves.length)
        console.log("choosed move: ", opponentPokemon.moves[opponentMove])

        let power = getMoveEffectivenessAndDamage(opponentPokemon.moves[opponentMove], pokemon)

        setIsWriting(true)

        let Message = `${opponentPokemon.label.toUpperCase()} attaque ${opponentPokemon.moves[opponentMove].title.toUpperCase() }`
        showLetter(Message, waitTime)

        setTimeout(() => {
            console.log(power.effectiveness)
            Message = `${power.effectiveness}`
            showLetter(Message, waitTime)
        }, waitTime * waitMult)

        let opponent = undefined
        
        if (selected_pokemon === undefined) {
            let life = pokemon.current_hp - power.damage

            opponent = pokemon
            opponent.current_hp = life
        }
        else {
            let life = selected_pokemon.current_hp - power.damage

            opponent = selected_pokemon
            opponent.current_hp = life
        }

        if (opponent.current_hp <= 0) {
            opponent.current_hp = 0
        }

        if (pokemon.current_hp <= 0) {
            setTimeout(() => {
                console.log(power.effectiveness)
                Message = `${pokemon.name.toUpperCase() } est KO.`
                showLetter(Message, waitTime)
            }, waitTime * (waitMult * 1.5))

            getNextPokemon()
        }

        setTimeout(() => {
            setIsWriting(false)
        }, waitTime * (waitMult * 3.5))

        setCurrentMenu("main")
    }


    // gestion du déroulement du tour
    const handleAttack = (move) => {
        let opponentMove = randomInt(0, opponentPokemon.moves.length)
        console.log("choosed move: ", opponentPokemon.moves[opponentMove])

        let waitTime = 350
        let waitMult = 15

        if (move.is_first === true) {
            attack(move)
            if (opponentPokemon.current_hp > 0) {
                setTimeout(() => {
                    opponentAttack()
                }, waitTime * waitMult)
            }
        }
        else if (pokemon.speed > opponentPokemon.speed) {
            attack(move)
            if (opponentPokemon.current_hp > 0) {
                setTimeout(() => {
                    opponentAttack()
                }, waitTime * waitMult)
            }
        }

        else {
            opponentAttack()
            if (pokemon.current_hp > 0) {
                setTimeout(() => {
                    attack(move)
                }, waitTime * waitMult)
            }
        }
    }


    // gestion du changement de pokemon
    const pokemonSwitch = (selected_pokemon) => {
        console.log("pokemonSwitch: ", selected_pokemon)
        let waitTime = 350
        let waitMult = 15

        setIsWriting(true)

        if (pokemon !== selected_pokemon) {
            let Message = `${pokemon.name.toUpperCase() } revient !`
            showLetter(Message, waitTime)

            setTimeout(() => {

                let Message = `${selected_pokemon.name.toUpperCase() } est envoyé au combat.`
                showLetter(Message, waitTime)

                setPokemon(selected_pokemon)

            }, (waitTime * waitMult))

            setTimeout(() => {
                opponentAttack(selected_pokemon)
            }, waitTime * (waitMult * 1.5))

        }

        setTimeout(() => {
            setIsWriting(false)
        }, waitTime * (waitMult * 2.5))

        setCurrentMenu("main")
    }

    // menu de changement de pokemon
    const SubMenuSwitchPokemon = () => {
        //console.log("subMenuSwitchPokemon: ", team)
        return (
            <>

                {team.map((pokemon) => {
                    return (
                        <div key={pokemon.id}>
                            <img src={pokemon.front} key={pokemon.id} alt={pokemon.name} />
                            <HealthBar label={pokemon.name.toUpperCase()} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                            <Button variant="contained" color="primary" fullWidth onClick={() => { pokemonSwitch(pokemon) } }>{pokemon.name}</Button>
                        </div>
                    )
                })}
            </>
        )
    }

    // reset du combat
    const battleReset = () => {
        setState()
    }

    // gestion changement de menu
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

    // menu principal
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

    // Log des actions
    const Answers = () => {

        return (
            <div className="font-face-gm box-log"> {currentMessage} </div>)
    }

    // composant principal
    const BattleScreen = () => {
        return (

            <div style={{ width: "70%", margin: "0 auto", backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "10px", marginBottom: "20px", marginTop: "20px" }}>


                {/*{console.log("battle team: ", team)}*/}
                {/*{console.log("opponent team: ", opponentTeam)}*/}
                {/*{console.log("opponent pokemon: ", opponentPokemon)}*/}

                <div style={{ width: "83%", margin: "0 auto" }}>
                    {/* Code pour rendre l'interface utilisateur du Pokémon et du Pokémon adverse */}
                    {currentMenu !== "switch" && currentMenu !== "end" &&

                        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ textAlign: "right", float: "right", padding: "10px", borderRadius: "10px", top:"150px", right:"150px", position: 'relative' }}>
                                <HealthBar label={opponentPokemon.label.toUpperCase()} currentHealth={opponentPokemon.current_hp} totalHealth={opponentPokemon.total_hp} />
                                <img src={opponentPokemon.front} style={{ height: 280, width: 280}} alt={opponentPokemon.label} />
                            </div>
                            {/*<CustomText>Fight!</CustomText>*/}
                            <div style={{left:"200px", top:"85px", position:'relative'}}>
                                <HealthBar label={pokemon.name.toUpperCase()} currentHealth={pokemon.current_hp} totalHealth={pokemon.total_hp} />
                                <img src={pokemon.back} style={{ height: 280, width: 280 }} alt={pokemon.name} />
                            </div>
                        </div>
                    }
                </div>

                <div style={{ width: "70%", margin: "0 auto", marginTop: "2%", marginBottom: "0%" }}>
                    {/* Code pour ajouter l'interface utilisateur des contrôles de combat */}

                    <div>
                        {currentMenu === "end" && isWriting === false && <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => battleReset()}>Reessayer</Button> }
                        {currentMenu === "main" && currentMenu !== "end" && isWriting === false && <Menu />}
                        {currentMenu === "attacks" && currentMenu !== "end" && isWriting === false && <SubMenuAttacks />}
                        {currentMenu === "switch" && currentMenu !== "end" && isWriting === false && <SubMenuSwitchPokemon />}
                        {currentMenu !== "main" && currentMenu !== "end" && isWriting === false && <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={() => setCurrentMenu("main")}>Back</Button>}
                        {isWriting === true && <Answers /> }
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

// reliquat de redux
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


    
