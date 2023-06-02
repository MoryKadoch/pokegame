import CustomText from "../CustomText";

import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [username, setUsername] = useState('');

    const login = () => {
        if (username) {
            // La logique de navigation doit être implémentée selon la bibliothèque de navigation utilisée en React JS (par exemple, react-router)
            // this.props.navigation.navigate("TeamSelect", {
            // username
            // });
        }
    };

    return (
        <Grid container spacing={2} style={styles.container}>
            <Grid item xs={12} style={styles.top}>
                {/*<CardMedia component="img" src={require('../assets/images/pokemon/pikachu.gif')} />*/}
                <Typography variant="h4" style={styles.headerText}>
                    Pokémon Battles
                </Typography>
            </Grid>
            <Grid item xs={12} style={styles.main}>
                <Typography variant="h6" style={styles.label}>
                    Enter username
                </Typography>
                <TextField
                    style={styles.textInput}
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <Button variant="contained" color="primary" onClick={login} style={styles.button}>
                    Sign in
                </Button>
            </Grid>
        </Grid>
    );
};

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#FFF',
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    main: {
        justifyContent: 'flex-start',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#eaeaea',
        padding: 5,
    },
    button: {
        alignSelf: 'center',
        marginTop: 10,
    },
};

export default LoginScreen;


