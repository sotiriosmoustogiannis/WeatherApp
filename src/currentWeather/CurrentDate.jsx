import * as React from 'react';
import Typography from '@mui/material/Typography';


export default function CurrentDate() {
    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    return (
        <Typography variant="h6" gutterBottom>
            Today - {getDate()}
        </Typography>
    )
}






