import * as React from 'react';
import Typography from '@mui/material/Typography';


export default function CurrentLocation({ location }) {
    return (

        <div>
            <Typography variant="h6" gutterBottom>
                {location}
            </Typography>
        </div>
    )
}