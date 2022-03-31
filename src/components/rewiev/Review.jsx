import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReview } from "shared/services/getMovies"
import style from "./review.module.css"
const RewiewOfFilm=()=>{
    const {id}=useParams();
    const [rewiew,setRewiew]=useState([])
    useEffect(()=>{
        const fetchRewiew=async()=>{
            try {
                const review= await getReview(id)
            setRewiew(review.results)
            } catch (error) {
                return "please try again later"
            }
            
        }   
        fetchRewiew()
    },[id])
     console.log(rewiew);
    const textRewiew=rewiew.map(item=>{
        return (
            <li key={item.id} className={style.post}>
                <p>author:{item.author}</p>
                <p>{item.content}</p>
            </li>
        )
    })
     return (<ul>
         {textRewiew}
     </ul>)
}
export default RewiewOfFilm