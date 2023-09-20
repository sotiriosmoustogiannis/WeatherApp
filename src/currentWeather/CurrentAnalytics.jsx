import * as React from 'react';
import Typography from '@mui/material/Typography';

function CurrentAnalytics({ wind, humidity, visibility, pressure }) {
    return (<div>
        <div className="currentAnalytics">
            <div className="currentAnalyticsContainer">
                <Typography variant="h5" gutterBottom>
                    Wind Stautus
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {wind}
                </Typography>
            </div>
            <div className="currentAnalyticsContainer">
                <Typography variant="h5" gutterBottom>
                    Humidity
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {humidity}
                </Typography>
            </div>
        </div>
        <div className="currentAnalytics">

            <div className="currentAnalyticsContainer">
                <Typography variant="h5" gutterBottom>
                    Visibility
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {visibility}
                </Typography>

            </div>
            <div className="currentAnalyticsContainer">
                <Typography variant="h5" gutterBottom>
                    Air pressure
                </Typography>
                <Typography variant="h3" gutterBottom>
                    {pressure}
                </Typography>

            </div>
        </div >
    </div>
    )
}
<Typography variant="h6" gutterBottom>
    {location}
</Typography>
export default CurrentAnalytics