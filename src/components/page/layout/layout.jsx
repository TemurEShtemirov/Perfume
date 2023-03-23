import { Outlet, Link } from "react-router-dom";
import Korzinka from "../../img/cART.png";
import "./layout.css"
const Layout = () => {
  return (
    <>
      <ul className="nav justify-content-center nav bg-dark">
        <li className="nav-item">
          <a
            className="nav-link a text-light"
            aria-current="page"
            href="#"
          >
            <Link to="/">Home</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded a bg-light" href="#">
            <Link to="/Cart">
              <img src={Korzinka} alt="Cart" />
            </Link>
          </a>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
