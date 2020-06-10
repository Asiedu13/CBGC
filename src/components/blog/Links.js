import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  return (
    <nav className="nav__list">
      <ul className="nav__list__con">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="active">
            Home <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </li>
        </Link>
        <Link to="/articles" style={{ textDecoration: "none" }}>
          <li>
            Articles <FontAwesomeIcon icon={["fas", "newspaper"]} size="1x" />
          </li>
        </Link>

        <Link to="/shopping" style={{ textDecoration: "none" }}>
          <li>
            Shopping{" "}
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="1x" />
          </li>
        </Link>

        <Link to="/registration" style={{ textDecoration: "none" }}>
          <li>
            Sign Up <FontAwesomeIcon icon={["fas", "user"]} size="1x" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Links;
