import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReview } from "shared/services/getMovie"
const RewiewOfFilm=()=>{
    const {id}=useParams();
    const [rewiew,setRewiew]=useState([])
    useEffect(()=>{
        const fetchRewiew=async()=>{
            const review= await getReview(id)
            setRewiew(review.results)
        }   
        fetchRewiew()
    },[id])
     console.log(rewiew);
    const textRewiew=rewiew.map(item=>{
        return (
            <li key={item.id}>
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