import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Link className="link" to="/home">
        <h2>IMS</h2>
      </Link>
    </div>
  );
}

export default Nav;
