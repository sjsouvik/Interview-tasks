import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="qed-navigation">
      <div className="brand">
        <h3 className="nav-brand">
          <Link to="/">QED42</Link>
        </h3>
      </div>
    </nav>
  );
};

export default NavBar;
