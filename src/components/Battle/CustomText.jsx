import React from 'react';
import { Typography } from '@material-ui/core';

const CustomText = ({ children, styles }) => {
    return (
        <Typography style={styles}>
            {children}
        </Typography>
    );
};

export default CustomText;