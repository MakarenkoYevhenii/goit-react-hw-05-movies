import {  useState } from "react";
import { getFilmSearch } from "shared/services/getMovies";
import { Link,
    useNavigate, useParams,} from 'react-router-dom';

  

const FilmSearch = () => {
  const {id}=useParams();
    const [value,setValue]=useState("")
    const [movies,setMovies]=useState([])
  const navigate = useNavigate();
    const handleChange=({target})=>{
        setValue(target.value)
    }
    const fetchMovies=async()=>{
        const moviesSearchResult= await getFilmSearch(value)
        setMovies(moviesSearchResult.results)
     }
    const handleSumbmit=(e)=>{
        e.preventDefault()
           fetchMovies()
    }
    const moviesList=movies.map(item=>{
        return(
            <li key={item.id}>
               <Link to={`${item.id}`}>{item.original_title}</Link>
            </li>
        )
    })
  return (
      <>
      <div>
      </div>
    <form>
      <label>
       <input type="text" name="name" onChange={handleChange} ></input>
      </label>
      <button onClick={handleSumbmit} type="submit" value="Отправить">search</button>
     
    </form>
    <div>
    <ul>
        {moviesList}
    </ul>
    </div>
    </>
  )
};

export default FilmSearch;
