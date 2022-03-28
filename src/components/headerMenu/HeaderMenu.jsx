import { Link, Outlet,useLocation,useNavigate } from 'react-router-dom';
import style from '../headerMenu/headerMenu.module.css';

const HeaderMenu = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from || "/";
  const goBack = ()=> navigate(from);
  console.log(location.pathname==="/");
  return (
    <div className={style.container}>
      
      <Link to="/" className={style.link}>
        Home
      </Link>
      <Link to="search" className={style.link}>movie</Link>
      {location.pathname==="/"?"":<button onClick={goBack}>Go back</button>}
      <Outlet />
     
    </div>
  );
};

export default HeaderMenu;
