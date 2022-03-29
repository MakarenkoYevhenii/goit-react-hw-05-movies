import { Link, Outlet, } from 'react-router-dom';
import style from '../headerMenu/headerMenu.module.css';

const HeaderMenu = () => {
 
  return (
    <div className={style.container}>
      
      <Link to="/" className={style.link}>
        Home
      </Link>
      <Link to="movies" className={style.link}>movie</Link>
      <Outlet />
     
    </div>
  );
};

export default HeaderMenu;
