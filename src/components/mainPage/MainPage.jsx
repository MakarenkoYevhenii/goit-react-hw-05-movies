import { trendsMovie } from '../../shared/services/getMovies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './mainPage.module.css';

const TrendsMovie = () => {
  const [data, setData] = useState({
    posts: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const newData = await trendsMovie();
        setData(() => {
          return {
            posts: newData.results,
            loading: false,
            error: null,
          };
        });
      } catch (error) {
        setData(prevState => {
          return {
            ...prevState,
            loading: false,
            error: error.message,
          };
        });
      }
    };
    fetchPosts();
  }, []);
  const filmName = data.posts.map(item => {
    console.log(item);
    return (
      <li key={item.id} className={style.link__item}>
        <Link to={`movies/${item.id}`} className={style.link}>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}width="400px"></img>
          <p>{item.original_title}</p>
        </Link>
      </li>
    );
  });
  return (
    <>
      <p>Trending Today</p>
      <ul className={style.filmList}>{filmName}</ul>
    </>
  );
};
export default TrendsMovie;
