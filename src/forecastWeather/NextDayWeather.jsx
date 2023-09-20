function NextDayWeather({ forecastWeather, temperatureType }) {
  return (
    <div className="nextDayWeather">
      {forecastWeather.map((forecast) => (
        forecast.dt_txt.includes("12:00:00") ?
          <div key={forecast.dt} className="nextDayWeatherContainer">
            <h1>{forecast.dt_txt}</h1>
            <h1>{forecast.weather[0].description}</h1>
            {temperatureType ?

              <h1> {forecast.main.temp_min} K - {forecast.main.temp_max} K</h1> :
              <h1> {(forecast.main.temp_min - 273.15).toFixed(2)} K - {(forecast.main.temp_max - 273.15).toFixed(2)} K</h1>
            }
          </div> : null
      ))}
    </div>

  )
}

export default NextDayWeather