import MainPage from './mainPage/MainPage';
import SingleFilmPage from './singelFilmPage/SingleFilmPage';
import CastsOfFilm from './casts/Casts';
import Review from './rewiev/Review'
import FilmSearch from './filmSeach/FilmSearch'
import HeaderMenu from './headerMenu/HeaderMenu';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path='/' element={<HeaderMenu/>}>
        <Route index element={<MainPage />}/>
        <Route path="film" element={<FilmSearch />}/>
        <Route path="film/:id/*" element={<SingleFilmPage />}>
          <Route path="casts" element={<CastsOfFilm/>} />
          <Route path="reviev" element={<Review/>} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
