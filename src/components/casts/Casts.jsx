import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCasts } from "shared/services/getMovies";


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
        <li key={item.id}>
        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.character} width="100px" />{item.name}</li>
        )
    })
    return(<ol>
        {humansCasts}
    </ol>)
}

export default CastsOfFilm