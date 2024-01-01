import { FaSearch } from "react-icons/fa";

const CitySearch = ({city, setCity, onSubmit}) => {

  return (
    
    <form className="flex justify-center" onSubmit={onSubmit}>
      <input className="bg-transparent placeholder-white text-white font-bold py-2 px-4 border-2"
      type = "text"
      placeholder="Search City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
      <button className="py-2 px-4 border-2">
      <FaSearch color="white"></FaSearch>
      </button>
      
    </form>
   
  )
}

export default CitySearch