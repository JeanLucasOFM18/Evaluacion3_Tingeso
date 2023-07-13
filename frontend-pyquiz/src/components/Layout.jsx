import { Outlet, Link } from "react-router-dom";
import "../styles/Navbar.css";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Layout = () =>{
 return <div className="hero">
    <nav>
      <div className="logo">
        <Link to="/">PyQuiz</Link>
      </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agregar">Añadir</Link>
          </li>
          <li>
            <Link to="/pruebas">Pruebas</Link>
          </li>
        </ul>
        <span className="navbar-text">
              <div className="social-icon">
                <a href="https://cl.linkedin.com/in/jean-lucas-rivera-rodríguez-bbb786190?trk=people-guest_people_search-card"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/JeanLucasOFM18"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/jeanlucasgram/?hl=en"><img src={navIcon3} alt="" /></a>
              </div>   
        </span>
    </nav>
    <Outlet />
 </div>;
}

export default Layout;