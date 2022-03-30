import {  useState,useEffect } from "react";
import { getFilmSearch } from "shared/services/getMovies";
import { Link, useParams,useSearchParams} from 'react-router-dom';
    import style from './filmSearch.module.css'

  

const FilmSearch = () => {
    const [value,setValue]=useState(" ")
    const [movies,setMovies]=useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('name');
    console.log(searchQuery);
    const handleChange=({target})=>{
        setValue(target.value)
    }
    useEffect(()=>{
      const fetchMovies=async()=>{
        try {
          const moviesSearchResult= await getFilmSearch(searchQuery)
        setMovies(moviesSearchResult.results)
        } catch (error) {
          
        }
        
     }
    if(Boolean(searchQuery)){
      return fetchMovies()
    }
    },[searchQuery])
  
     
    const moviesList=movies.map(item=>{
        return(
            <li key={item.id} className={style.link_bam}>
               <Link to={`${item.id}`} className={style.link_bam}>
                 
                 <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}width="400px"></img>
                 <p>{item.original_title}</p>
               </Link>
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
      <button className={style.buttonlink}>search</button>
    </form>
    <div>
    <ul className={style.filmList}>
        {moviesList}
    </ul>
    </div>
    </>
  )
};

export default FilmSearch;
