import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCasts } from "shared/services/getMovies";
import style from "../casts/casts.module.css"
const CastsOfFilm=()=>{
    const {id}=useParams();
    const [casts,setCasts]=useState([]);
    
    useEffect(()=>{
        const fetchCasts=async()=>{
            const singleMovie= await getCasts(id)
            setCasts(singleMovie.cast)
         }
         fetchCasts()
     },[id])
    const humansCasts=casts.map(item=>{
        return( 
        <li key={item.id} className={style.humans}>
         <p>{item.name}</p><img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.character} width="200px" /></li>
        )
    })
    return(<ul className={style.castList}>
        {humansCasts}
    </ul>)
}

export default CastsOfFilm