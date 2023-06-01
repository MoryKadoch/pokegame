import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Grid, Card, CardMedia, CardContent, CircularProgress, Typography, CardActions, Button, Chip, TextField, InputAdornment } from '@material-ui/core'
import Pagination from './Pagination.jsx'

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [displayPokemon, setDisplayPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPokemon()
    }, [])

    useEffect(() => {
        const pokemonList = pokemonData.slice(page * 12, (page + 1) * 12)
        if (search === '') {
            setDisplayPokemon(pokemonList)
        } else {
            const results = pokemonList.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            setDisplayPokemon(results)
        }
    }, [pokemonData, page])

    useEffect(() => {
        const results = pokemonData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
        setTotalPages(Math.ceil(results.length / 12))
        setPage(0)
        setDisplayPokemon(results.slice(page * 12, (page + 1) * 12))
    }, [search])

    const getPokemon = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
            .then(function (response) {
                const { data } = response
                const { results } = data
                setTotalPages(Math.ceil(results.length / 12))
                setPokemonData(results)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2} style={{ padding: '24px' }}>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Search Pokemon" variant="outlined" fullWidth onChange={(e) => setSearch(e.target.value)} />
                        </Grid>
                        {displayPokemon.map((pokemon, i) => {
                            return (
                                <Grid item xs={12} sm={4} key={i}>
                                    <Card>
                                        <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <CardMedia style={{ height: '250px', backgroundSize: 'contain' }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[pokemon.url.split("/").length - 2]}.png`} />
                                            <CardContent>
                                                <Typography variant="h5" style={{ textTransform: 'capitalize', fontWeight: 'bold', textAlign: 'center' }}>
                                                    {pokemon.name}
                                                </Typography>
                                                <Chip label={`#${pokemon.url.split("/")[pokemon.url.split("/").length - 2]}`} sx={{ mt: 2 }} />
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            )
                        })}
                        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                    </Grid>
                </>
            )}
        </>
    )
}

export default Pokedex