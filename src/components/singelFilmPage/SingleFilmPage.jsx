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
      const singleMovie = await getMovie(id);
      setFilm(singleMovie);
      setGenres(
        singleMovie.genres.map(item => {
          return item.name;
        })
      );
    };
    fetchFilm();
  }, [id]);
  const listGenres=genres.map(item=>{
    return (
      <li key={item}>{item}</li>
    )
  })
  return (
    <>
          {location.pathname==="/"?"":<button onClick={goBack}>Go back</button>}
          <div className={style.film_detail}>
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt=""
        width="400px"
      />
      <div className={style.film_description}>
      <h2>{film.original_title}</h2>
      <p>{film.overview}</p>
      <ul><h2>Genres:</h2>
      {listGenres}</ul></div>
      </div>
      <div className={style.container}>
      <Link to="cast" className={style.link}>cast</Link>
      <Link to="reviews" className={style.link}>reviev</Link>
      </div>
      <Outlet />
    </>
  );
};
export default SingelFilmPage;
