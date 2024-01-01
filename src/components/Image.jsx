import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_UNSPLASH_IMAGES_API
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const Image = ({city}) => {
    const[image, setImage] = useState([])
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
    <div>
        <img src={`${image}`} alt={city} />
    </div>
  )
}

export default Image