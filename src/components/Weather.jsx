import axios from "axios"
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL;


const Weather = ({city}) => {
  const [weatherData, setWeatherData]= useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
    .get(`${API_URL}/weather?q=${city}&APPID=${API_KEY}`)
    .then(response => {
        setWeatherData(response.data)
        setLoading(false)    
    })
    .catch(error => {
        setError(error)
        setLoading(false)
        console.log(error)
    })  

  },[city])
  
  return (
    <div className="text-center">
      {loading && <p>Loading...</p>}
      {/* {error && <p>Error: {error.message}</p>} */}
      
      {weatherData && weatherData.main && (
        <div className="text-lg bg-gray-200 p-4 w-3/5 mx-auto rounded-lg">
          <p>Location: {weatherData.name}</p>
          <p>Weather Today: {weatherData.weather[0].description}</p>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}

    </div>
  )
}

export default Weather