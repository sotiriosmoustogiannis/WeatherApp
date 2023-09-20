import * as React from 'react';
import Typography from '@mui/material/Typography';


export default function CurrentTemperature({ temperature, temperatureType }) {


    return (

        <div className="currentTemperature">
            {temperatureType ?
                <Typography variant="h2" gutterBottom>
                    {temperature} K
                </Typography> :
                <Typography variant="h2" gutterBottom>
                    {(temperature - 273.15).toFixed(2)} C
                </Typography>
            }
        </div>
    )
}