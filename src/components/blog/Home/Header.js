import React from "react";
import vid from "../../../vids/article.mp4";
import Button from "../Util/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
  render() {
    return (
      <section className="header">
        <h1>
          Clarksons{" "}
          <FontAwesomeIcon
            icon={["fas", "heart"]}
            color="hsl(194, 81%, 43%)"
            size="2x"
          />
        </h1>
        <p className="header__slogan">Strategy that delivers</p>

        <div className="homepage-hero-module">
          <div className="video-container">
            <div className="filter"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              src={vid}
              className="fillWidth"
            >
              Your browser does not support this video type
            </video>

            <div className="poster hidden">
              <img src="PATH_TO_JPEG" alt="" />
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link to="/register">
            <Button label="Sign up" importance="high" icon="angle-right" />
          </Link>
          <Link to="/register">
            <Button label="Sign In" importance="medium" icon="angle-right" />
          </Link>
        </div>
      </section>
    );
  }
}
export default Header;
