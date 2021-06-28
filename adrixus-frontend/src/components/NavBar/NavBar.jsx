import { Link } from "react-router-dom";

import person from "../../assets/person.svg";
import Logout from "../../assets/logout.png";

import { useAuth } from "../../Providers/AuthProvider";

import "./NavBar.css";

const NavBar = () => {
  const { authToken, authUser, logout } = useAuth();

  return (
    <nav className="adrixus-navigation">
      <div className="brand">
        <h3 className="nav-brand">
          <Link to="/">Adrixus</Link>
        </h3>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to={authToken ? "/" : "/login"}>
            <img src={person} alt="icon-user" style={{ height: "1.5rem" }} />
            <div style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              {authToken ? "Hi, " + authUser?.firstName : "Login"}
            </div>
          </Link>
        </li>

        {authToken && (
          <li
            className="nav-item"
            style={{ cursor: "pointer" }}
            onClick={logout}
          >
            <img src={Logout} alt="icon-logout" style={{ height: "1.5rem" }} />
            <div style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              Logout
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
