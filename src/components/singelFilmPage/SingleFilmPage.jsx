import { useEffect, useState,} from 'react';
import {
  useParams,
  Link,
  Outlet,useLocation ,useNavigate
} from 'react-router-dom';
import { getMovie } from '../../shared/services/getMovies';
import style from "./SingleFilmPage.module.css"

const SingelFilmPage = () => {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const goBack = ()=> navigate(from);
  console.log(navigate);
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const singleMovie = await getMovie(id);
        setFilm(singleMovie);
        setGenres(
          singleMovie.genres.map(item => {
            return item.name;
          })
        );
      } catch(err){}
    }
    fetchFilm();
  }, [id]);
  const listGenres=genres.map(item=>{
    return (
      <li key={item}>{item}</li>
    )
  })
  return (
    <>
         
          <div className={style.film_detail}>
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt=""
        width="400px"
        className={style.poster}
      />
      <div className={style.film_description}>
      <h2>{film.original_title}</h2>
      <p>{film.overview}</p>
      <ul className={style.genresList}><h2>Genres:</h2>
      {listGenres}</ul></div>
      </div>
      <div className={style.container}>
      <Link to="cast" className={style.link}>cast</Link>
      <Link to="reviews" className={style.link}>reviev</Link>
      </div>
      <Outlet />
      {location.pathname==="/"?"":<button onClick={goBack}>Go back</button>}
    </>
  );
};
export default SingelFilmPage;
