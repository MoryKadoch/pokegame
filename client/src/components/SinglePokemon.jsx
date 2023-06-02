import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, CircularProgress, CardActions, Button, Chip, Avatar, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PokemonCard from './PokemonCard'
import AbilitiesCard from './AbilitiesCard'
import StatsCard from './StatsCard'
import MovesCard from './MovesCard'
import moves_data from './Battle/Data/moves_data.js'

const SinglePokemon = () => {
    const name = useParams().name;
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(function (response) {
                const { data } = response
                setPokemonData(data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const handleFavorite = (e, pokemon) => {
        if (JSON.parse(localStorage.getItem('favorites')) === null) {
            localStorage.setItem('favorites', JSON.stringify([]))
        }

        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const isAlreadyFavorite = favorites.filter((favorite) => favorite.id === pokemon.id).length > 0

        if (isAlreadyFavorite) {
            alert('This pokemon is already in your favorites!')
            return
        }

        if (favorites.length === 6) {
            alert('You can only have 6 Pokemon in your team!')
            return
        }

        const moves = pokemon.moves.map((move) => {
            return { id: move.move.url.split('/')[6], name: move.move.name, chosen: false }
        })

        // If moves are not in the moves_data, remove them from the moves array
        const newMoves = []
        moves.forEach((move, index) => {
            if (moves_data[move.id] === undefined) {
                console.log(`Move ${move.name} is not in the moves_data`)
                return
            }
            newMoves.push(move)
        })

        // First 4 moves are chosen true
        newMoves.forEach((move, index) => {
            if (index < 4) {
                move.chosen = true
            }
        })

        const newFavoriteList = [...JSON.parse(localStorage.getItem('favorites')), { name: pokemon.name, id: pokemon.id, moves: newMoves }]
        localStorage.setItem('favorites', JSON.stringify(newFavoriteList))
        e.target.innerHTML = 'Added to favorites!'
    }


    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2} style={{ padding: "24px" }}>
                        <Grid item xs={12} sm={4}>
                            <PokemonCard pokemonData={pokemonData} handleFavorite={handleFavorite} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <AbilitiesCard abilities={pokemonData.abilities} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StatsCard stats={pokemonData.stats} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <MovesCard moves={pokemonData.moves} />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )

}

export default SinglePokemon
