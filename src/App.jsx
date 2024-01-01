import axios from "axios"
import { useState, useEffect } from 'react'
import CitySearch from './components/CitySearch'
import Weather from './components/Weather'

const API_URL = import.meta.env.VITE_UNSPLASH_IMAGES_API
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY


const App = () => {
  const [city, setCity] = useState('London')
  const[image, setImage] = useState([])

  const handleCitySubmit = (e) => {
    e.preventDefault()
    setCity('')
    
  }

  useEffect(() => {
    axios
    .get(`${API_URL}?query=${city}&client_id=${API_KEY}`)
    .then(res => {
        setImage(res.data?.results[0].urls?.raw)
        console.log(res.data)
        console.log(city)
    })
    .catch(error => {
        console.log(error.message)
    })

},[city])


  return (
    <div className="flex flex-col justify-center gap-10"
    style={{backgroundImage: `url(${image})`, backgroundSize: 'cover',
    height: '100vh', opacity: '0.8'}}>
      <CitySearch city={city} setCity={setCity} onSubmit={handleCitySubmit}></CitySearch>
      <Weather city={city}></Weather>
    </div>
  )
}

export default App