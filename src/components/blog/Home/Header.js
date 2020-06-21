import React from "react";
import "../../../css/blog/main.css";
import vid from "../../../vids/article.mp4";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.PureComponent {
  render() {
    return (
      <section className="header">
        <h1>
          Clarkson's <b>Blog</b>{" "}
          <FontAwesomeIcon icon={["fas", "heart"]} size="2x" />
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
          <Button label="Sign up" importance="high" icon="angle-right" />
          <Button label="Sign In" importance="medium" icon="angle-right" />
        </div>
      </section>
    );
  }
}
export default Header;
