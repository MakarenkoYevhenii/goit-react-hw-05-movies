// import MainPage from './mainPage/MainPage';
// import SingleFilmPage from './singelFilmPage/SingleFilmPage';
// import CastsOfFilm from './casts/Casts';
// import Review from './rewiev/Reviews'
// import FilmSearch from './filmSeach/FilmSearch'
// import HeaderMenu from './headerMenu/HeaderMenu';
import { Route, Routes } from 'react-router-dom';
import { Suspense,lazy} from 'react';

const Casts = lazy(() => import("./casts/Casts"));
const Review = lazy(() => import("./rewiev/Review"));
const FilmSearch = lazy(() => import("../pages/moviesSearch/MoviesSearchPage"));
const HeaderMenu = lazy(() => import("../pages/headerPage/HeaderPage"));
const SingleFilmPage = lazy(() => import("../pages/singleFilm/SingleFilmPage"));
const MainPage = lazy(() => import("./MainPage/MainPage"));

export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path='/' element={<HeaderMenu/>}>
        <Route index element={<MainPage />}/>
        <Route path="movies" element={<FilmSearch/>}/>
        <Route path="movies/:id/" element={<SingleFilmPage />}>
          <Route path="cast" element={<Casts/>} />
          <Route path="reviews" element={<Review/>} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
