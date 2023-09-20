import { useEffect, useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPlace from './utils/SearchPlace'
import NextDayWeather from './forecastWeather/NextDayWeather'
import ChooseTemperature from './utils/ChooseTemperature'
import CurrentTemperature from "./currentWeather/CurrentTemperature"
import CurrentDescription from "./currentWeather/CurrentDescription"
import CurrentDate from "./currentWeather/CurrentDate"
import CurrentLocation from "./currentWeather/CurrentLocation"
import CurrentAnalytics from "./currentWeather/CurrentAnalytics"
import Typography from '@mui/material/Typography';

const weather_api_key = import.meta.env.VITE_REACT_WEATHER_API_KEY
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.983810&lon=23.727539&appid=${weather_api_key}`

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=37.983810&lon=23.727539&appid=${weather_api_key}`


function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)
  const [temperatureType, setTemperatureType] = useState(true)

  const fetchCurrentWeatherData = () => {
    fetch(currentUrl)
      .then(response => {
        // console.log(response.clone().json())
        return response.clone().json()
      })
      .then(data => {
        // console.log(data)
        setCurrentWeather(data)
      })

  }

  const fetchForecastWeatherData = () => {
    fetch(forecastUrl)
      .then(response => {
        console.log(response.clone().json())
        return response.clone().json()
      })
      .then(data => {
        console.log(data)
        setForecastWeather(data)
      })

  }

  useEffect(() => {
    fetchCurrentWeatherData()
    fetchForecastWeatherData()
  }, [])

  const handleChangeTemperature = () => {
    console.log("inside")
    setTemperatureType(!temperatureType)
  }
  debugger

  return (
    <>
      <div className='Parent'>
        <div className='leftCurrent'>
          {currentWeather && <>
            <SearchPlace className="searchPlace" />
            <CurrentTemperature temperature={currentWeather.main.temp} temperatureType={temperatureType} />
            <CurrentDescription description={currentWeather.weather[0].description} />
            <CurrentDate />
            <CurrentLocation location={currentWeather.name} />

          </>}

        </div>
        <div className='child2'>
          <p>{import.meta.env.VITE_REACT_WEATHER_API_KEY}</p>
          <ChooseTemperature changeTemperature={handleChangeTemperature} />
          {forecastWeather && <>
            <NextDayWeather forecastWeather={forecastWeather.list} temperatureType={temperatureType} />
          </>}
          <Typography variant="h4" gutterBottom sx={{ color: "white", m: 3 }}>Today's HIghlights</Typography>
          {currentWeather && <>
            <CurrentAnalytics wind={currentWeather.wind.speed} humidity={currentWeather.main.humidity} visibility={currentWeather.visibility} pressure={currentWeather.main.pressure} />

          </>}
        </div>
      </div>

    </>
  )
}

export default App
