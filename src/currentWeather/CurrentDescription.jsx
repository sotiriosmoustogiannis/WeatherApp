import * as React from 'react';
import Typography from '@mui/material/Typography';


export default function CurrentDescription({ description }) {
    return (
        <Typography variant="h3" gutterBottom>
            {description}
        </Typography>
    )
}