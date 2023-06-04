import { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Chip, CardActions, Button, CircularProgress, Checkbox, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    const handleClickOpen = (pokemon) => {
        setCurrentPokemon(pokemon);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    const handleMoveChange = (e, move, pokemon) => {
        // if move is checked or unchecked update localstorage move chosen value
        const newFavoriteList = JSON.parse(localStorage.getItem('favorites')).map((favorite) => {
            if (favorite.id === pokemon.id) {
                // if there is aleady 4 moves chosen, alert user and return
                const chosenMoves = favorite.moves.filter((move) => move.chosen)
                if (chosenMoves.length === 4 && !move.chosen) {
                    alert('You can only choose 4 moves!')
                    return favorite
                }
                const newMoves = favorite.moves.map((favoriteMove) => {
                    if (move.id === favoriteMove.id) {
                        favoriteMove.chosen = !favoriteMove.chosen
                    }
                    return favoriteMove
                })
                favorite.moves = newMoves
            }
            return favorite
        })
        localStorage.setItem('favorites', JSON.stringify(newFavoriteList))
        setCurrentPokemon(newFavoriteList.find((favorite) => favorite.id === pokemon.id))
        setFavorites(newFavoriteList)
    }

    if (favorites.length === 0 && !loading) {
        return (
            <Grid container spacing={2} style={{ padding: "24px", height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Typography variant="h4">
                        Your team is empty, browse the Pokédex to add Pokémon to your team!
                    </Typography>
                    <Button variant="contained" color="primary" style={{ marginTop: '16px' }} component={Link} to="/" size="large">
                        Go !
                    </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2} style={{ padding: "24px" }}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="h4">
                                Favorites
                            </Typography>
                        </Grid>
                        {favorites.map((pokemon, i) => {
                            return (
                                <Grid item xs={12} sm={4} key={i}>
                                    <Card style={{ height: '100%' }}>
                                        <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <CardMedia style={{ height: '250px', backgroundSize: 'contain' }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                                            <CardContent style={{ textAlign: 'center' }}>
                                                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />} onClick={(e) => handleRemoveFavorite(e, pokemon)}>
                                                Remove from Favorites
                                            </Button>
                                            {pokemon.moves.length > 0 && (
                                                <div>
                                                    <Button variant="contained" color="primary" onClick={() => handleClickOpen(pokemon)} style={{ marginLeft: '16px' }}>
                                                        Choose Moves
                                                    </Button>
                                                    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
                                                        <DialogTitle>
                                                            <Typography variant="h5" style={{ textAlign: 'center' }}>
                                                                Choose 4 moves for {currentPokemon?.name}
                                                            </Typography>
                                                            <Button onClick={handleClose} style={{ position: 'absolute', right: '8px', top: '8px', fontWeight: 'bold', borderRadius: '50%', minWidth: '0px', width: '32px', height: '32px', backgroundColor: 'grey', color: 'white' }}>
                                                                X
                                                            </Button>
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <Grid container spacing={2}>
                                                                {currentPokemon?.moves.map((move, i) => (
                                                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                                                        <Checkbox
                                                                            value={move.name}
                                                                            {...(move.chosen ? { checked: true } : { checked: false })}
                                                                            onChange={(e) => handleMoveChange(e, move, currentPokemon)}
                                                                        />
                                                                        <ListItemText primary={move.name} />
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            )}
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