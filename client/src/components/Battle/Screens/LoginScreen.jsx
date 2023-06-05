import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [backgroundSound, setBackgroundSound] = useState(null);
    const navigateTo = useNavigate();

    const handleLogin = () => {
        if (username) {
            navigateTo('/battle', { state: { username } })
            if (backgroundSound) {
                backgroundSound.pause();
            }
        }
    };

    return (
        <Grid container spacing={2} style={{ padding: '24px', height: '80vh' }}>
            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
                    <Typography variant="h4" component="h2">
                        Login to play
                    </Typography>
                    <Box display="flex" justifyContent="center" width="100%" marginBottom={2} style={{ padding: '0 16px' }}>
                        <Box width="100%" marginBottom={2}>
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ marginTop: 16, marginBottom: 16, width: '100%' }}
                            />
                        </Box>
                        <Box width="100%">
                            <Button onClick={handleLogin} variant="contained" color="primary" style={{ width: '100%' }} size="large">
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginScreen;