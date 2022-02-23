import {  useState } from "react";
import { getFilmSearch } from "shared/services/getMovie";
import { Link,useLocation,
    useNavigate, } from 'react-router-dom';
const FilmSearch = () => {
    const [value,setValue]=useState("")
    const [movies,setMovies]=useState([])
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);
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
console.log(movies);
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
      <button onClick={goBack}>goBack</button>
      </div>
    <form>
      <label>
        <input type="text" name="name" onChange={handleChange} />
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
