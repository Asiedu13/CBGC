import React from "react";
import Logo from "./Nav/Logo";
import Links from "./Nav/Links";
import "../../css/blog/main.css";

function Nav() {
  return (
    <div className="nav">
      <Logo />
      <Links />
    </div>
  );
}
export default Nav;
