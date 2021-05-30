import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Links extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: false,
      responsive: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    let deviceWidth = window.innerWidth;
    if (deviceWidth <= 768) {
      this.setState({ responsive: true });
    }
  }
  toggleMenu() {
    let deviceWidth = window.innerWidth;
    if (deviceWidth < 768) this.setState({ toggleNav: !this.state.toggleNav });
  }
  render() {
    return (
      <nav className="nav__list">
        {!this.state.responsive ? (
          " "
        ) : (
          <Fade>
            <li id="menu-icon" onClick={this.toggleMenu}>
              <FontAwesomeIcon icon={["fa", "bars"]} size="2x" />
            </li>
          </Fade>
        )}

        {!this.state.responsive ? (
          <Fade>
            <ul className="nav__list__con">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="active desktop">
                  Home <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
                </li>
              </Link>
              <Link to="/articles" style={{ textDecoration: "none" }}>
                <li className="desktop">
                  Articles{" "}
                  <FontAwesomeIcon icon={["fas", "newspaper"]} size="1x" />
                </li>
              </Link>
              <a style={{textDecoration:"none"}} href="http://www.clarksonsshop.com/" rel="noreferrer noopener">
                <li className="desktop">
                  Shopping{" "}
                  <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="1x" />
                </li>
                </a>
              
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li className="desktop">
                  Sign In <FontAwesomeIcon icon={["fas", "user"]} size="1x" />
                </li>
              </Link>{" "}
            </ul>
          </Fade>
        ) : this.state.toggleNav ? (
          <ul className="nav__list__con">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="active desktop">
                Home <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
              </li>
            </Link>
            <Link to="/articles" style={{ textDecoration: "none" }}>
              <li className="desktop">
                Articles{" "}
                <FontAwesomeIcon icon={["fas", "newspaper"]} size="1x" />
              </li>
            </Link>
            <Link to="/shopping" style={{ textDecoration: "none" }}>
              <li className="desktop">
                Shopping{" "}
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} size="1x" />
              </li>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <li className="desktop">
                Sign In <FontAwesomeIcon icon={["fas", "user"]} size="1x" />
              </li>
            </Link>{" "}
          </ul>
        ) : (
          ""
        )}
      </nav>
    );
  }
}

export default Links;
