import MainPage from './mainPage/MainPage';
import SingleFilmPage from './singelFilmPage/SingleFilmPage';
import CastsOfFilm from './casts/Casts';
import Review from './rewiev/Reviews'
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
        <Route path="search" element={<FilmSearch/>}>
          <Route path='*' element={<FilmSearch/>}></Route>
        </Route>
        <Route path="movies/:id/*" element={<SingleFilmPage />}>
          <Route path="cast" element={<CastsOfFilm/>} />
          <Route path="reviews" element={<Review/>} />
        </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
