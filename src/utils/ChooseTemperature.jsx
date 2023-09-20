import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';

export default function ChooseTemperature({ changeTemperature }) {

    return (
        <div className='chooseTemperature'>
            <IconButton aria-label="celsious" onClick={changeTemperature} sx={{ color: "grey" }}>
                <ThermostatIcon />
            </IconButton>
        </div>
    )
}