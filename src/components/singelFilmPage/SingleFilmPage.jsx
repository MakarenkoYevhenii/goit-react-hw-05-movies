import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
} from 'react-router-dom';
import { getMovie } from '../../shared/services/getMovies';
import style from "./SingleFilmPage.module.css"

const SingelFilmPage = () => {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  console.log(id);
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
      <p key={item}>{item}</p>
    )
  })
  return (
    <>
    <div>
</div>
      <p>{film.original_title}</p>
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt=""
        width="200px"
      />
      <p>{film.overview}</p>
      {listGenres}
      <div className={style.container}>
      <Link to="cast" className={style.link}>cast</Link>
      <Link to="reviews">reviev</Link>
      <Outlet /></div>
    </>
  );
};
export default SingelFilmPage;
