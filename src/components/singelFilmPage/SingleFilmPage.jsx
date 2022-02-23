import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovie } from '../../shared/services/getMovie';
import style from "./SingleFilmPage.module.css"

const SingelFilmPage = () => {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

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

  return (
    <>
    <div>
<button onClick={goBack}>goBack</button>
</div>
      <p>{film.original_title}</p>
      <img
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt=""
        width="200px"
      />
      <p>{film.overview}</p>
      <p>{genres}</p>
      <div className={style.container}>
      <Link to="casts" className={style.link}>cast</Link>
      <Link to="reviev">reviev</Link>
      <Outlet /></div>
    </>
  );
};
export default SingelFilmPage;
