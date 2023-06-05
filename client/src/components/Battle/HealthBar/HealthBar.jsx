import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import './HealthBar.css';

const HealthBar = ({ label, currentHealth, totalHealth }) => {
    let percent = (currentHealth / totalHealth) * 100;
    let healthColor =
        percent <= 15
            ? 'healthCritical'
            : percent <= 45
                ? 'healthWarning'
                : 'healthOK';

    let progressColor = styles[healthColor];

    return (
        <Grid container direction="column" alignItems="flex-start" spacing={1}>
            <Grid item>
                <div className="font-face-gm" style={styles.label} variant="h6">{label}</div>
            </Grid>
            <Grid item>
                <div style={styles.container}>
                    <div style={styles.rail}>
                        <div style={{ ...styles.progress, ...progressColor, width: percent + '%' }} />
                    </div>
                    <div style={styles.percent}>
                        <Typography style={styles.percentText}>{parseInt(percent)}%</Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

const styles = {
    container: {
        height: 10,
        width: 300,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        paddingBottom: 2,
        color: '#212121',
    },
    rail: {
        height: 10,
        width: 300,
        border: '1px solid #616161',
        borderRadius: 3,
    },
    progress: {
        height: 8,
    },
    healthOK: {
        backgroundColor: '#5db56d',
    },
    healthWarning: {
        backgroundColor: '#fcc419',
    },
    healthCritical: {
        backgroundColor: '#fa5252',
    },
    percent: {
        paddingLeft: 3,
    },
    percentText: {
        fontSize: 10,
        color: '#212121',
    },
};

export default HealthBar;