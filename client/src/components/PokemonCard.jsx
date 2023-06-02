import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const PokemonCard = ({ pokemonData, handleFavorite }) => {

    const colorsType = {
        bug: '#729f3f',
        dragon: '#53a4cf',
        fairy: '#fdb9e9',
        fire: '#fd7d24',
        ghost: '#7b62a3',
        ground: '#f7de3f',
        normal: '#a4acaf',
        psychic: '#f366b9',
        steel: '#9eb7b8',
        dark: '#707070',
        grass: '#9bcc50',
        poison: '#b97fc9',
        rock: '#a38c21',
        water: '#4592c4',
        electric: '#eed535',
        fighting: '#d56723',
        flying: '#3dc7ef',
        ice: '#51c4e7'
    }

    const cry = new Audio(`https://play.pokemonshowdown.com/audio/cries/${pokemonData.name.replace('-', '')}.mp3`)
    
    return (
        <Card style={{ height: '100%' }}>
            <CardMedia style={{ height: '250px', backgroundSize: 'contain' }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} />
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    {pokemonData.name}
                </Typography>
                <Typography variant="body1">
                    Height: {pokemonData.height}
                </Typography>
                <Typography variant="body1">
                    Weight: {pokemonData.weight} lbs
                </Typography>
                <Typography variant="body1">
                    Types: {pokemonData.types.map((type, i) => {
                        return (
                            <Chip key={i} label={type.type.name} style={{ margin: '4px', backgroundColor: colorsType[type.type.name], color: 'white' }} />
                        )
                    })}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" startIcon={<FavoriteIcon />} onClick={(e) => handleFavorite(e, pokemonData)}>
                   { JSON.parse(localStorage.getItem("favorites")) !== null && JSON.parse(localStorage.getItem("favorites")).includes(pokemonData.name) ? 'Added to Favorites' : 'Add to Favorites'}
                </Button>
                <Button variant="contained" color="secondary" onClick={() => cry.play()}>Listen to Cry</Button>
            </CardActions>
        </Card>
    )
}

export default PokemonCard