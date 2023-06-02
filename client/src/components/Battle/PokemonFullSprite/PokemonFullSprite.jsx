import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const PokemonFullSprite = ({ spriteFront, spriteBack, orientation }) => {
    let sprite = orientation === 'front' ? spriteFront : spriteBack;

    const classes = useStyles();

    return <img src={sprite} alt="Pokemon Sprite" className={classes.image} />;
};

const useStyles = makeStyles({
    image: {
        width: 150,
    },
});

export default PokemonFullSprite;