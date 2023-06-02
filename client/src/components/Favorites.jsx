import { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Chip, CardActions, Button, CircularProgress } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getFavorites = async () => {
            let favorites = JSON.parse(localStorage.getItem('favorites'))
            if (favorites === null) {
                favorites = []
            }
            setFavorites(favorites)
            setLoading(false)
        }
        getFavorites()
    }, [])

    const handleRemoveFavorite = (e, pokemon) => {
        const newFavoriteList = JSON.parse(localStorage.getItem('favorites')).filter((favorite) => favorite.id !== pokemon.id)
        localStorage.setItem('favorites', JSON.stringify(newFavoriteList))
        setFavorites(newFavoriteList)
    }

    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2} style={{ padding: "24px" }}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <h1>My team</h1>
                        </Grid>
                        {favorites.map((pokemon, i) => {
                            return (
                                <Grid item xs={12} sm={4} key={i}>
                                    <Card style={{ height: '100%' }}>
                                        <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <CardMedia style={{ height: '250px', backgroundSize: 'contain' }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                                            <CardContent style={{ textAlign: 'center' }}>
                                                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                                    {pokemon.name}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />} onClick={(e) => handleRemoveFavorite(e, pokemon)}>
                                                Remove from Favorites
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            )}
        </>
    )
}

export default Favorites