import React from "react";
import { Grid } from "@material-ui/core";
import CustomText from "../CustomText";

import PokemonOption from "../PokemonOption";

const PokemonList = ({
    data,
    numColumns,
    scrollEnabled,
    action_type,
    opponents_channel
}) => {
    console.log(data);

    return (
        <Grid container spacing={2}>
            {data.map((item) => (
                <Grid item xs={12 / numColumns} key={item.id}>
                    <PokemonOption
                        pokemon_data={item}
                        is_selected={item.is_selected}
                        action_type={action_type}
                        opponents_channel={opponents_channel}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default PokemonList;