import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const ActionList = ({ setMove }) => {
    const dispatch = useDispatch();

    const data = [
        {
            label: 'Fight',
            action: () => {
                setMove('select-pokemon-move');
                // Todo: add code for dispatching action to select Pokemon move
            },
        },
        {
            label: 'Switch',
            action: () => {
                setMove('select-pokemon');
                // Todo: add code for dispatching action to switch Pokemon
            },
        },
    ];

    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item xs={6} key={index}>
                    <Button variant="contained" color="primary" onClick={item.action} style={styles.container}>
                        <Typography variant="h6" style={styles.label}>
                            {item.label}
                        </Typography>
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

const styles = {
    container: {
        backgroundColor: '#ffd43b',
        padding: 20,
        width: '100%',
    },
    label: {
        fontSize: 20,
    },
};

// Todo: add mapStateToProps (team)

// Todo: add mapDispatchToProps (setMove)

export default ActionList; // Todo: convert component into a connected component