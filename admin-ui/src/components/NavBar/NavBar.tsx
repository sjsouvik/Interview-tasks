import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="adrixus-navigation">
      <div className="brand">
        <h3 className="nav-brand">
          <Link to="/">Admin-UI</Link>
        </h3>
      </div>
    </nav>
  );
};

export default NavBar;
