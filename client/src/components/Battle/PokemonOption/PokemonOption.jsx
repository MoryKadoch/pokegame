import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@material-ui/core";
import CustomText from "../CustomText";
import { Entypo } from "@material-ui/icons";

// todo: import Redux packages
// todo: import actions

const PokemonOption = ({ pokemon_data, is_selected, action_type }) => {
    let compact = action_type === "select-pokemon" ? false : true;
    let marginTop = compact ? {} : { marginTop: 20 };
    let imageStyle = compact ? { width: 40 } : { width: 60 };

    const { label, sprite } = pokemon_data; // todo: extract id

    return (
        <Card>
            <CardMedia
                component="img"
                height="250"
                image={sprite}
                alt={label}
                style={imageStyle}
            />
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-between" style={marginTop}>
                    <Typography variant="body1" style={{ textTransform: "capitalize" }}>
                        {label}
                    </Typography>
                    <IconButton color={is_selected ? "primary" : "default"}>
                        <Entypo name="check" />
                    </IconButton>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PokemonOption;
