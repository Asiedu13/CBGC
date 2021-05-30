import React from "react";
import reader from "../../../pics/standing-reading.svg";
import shopper from "../../../pics/shopping.svg";
import talker from "../../../pics/getting-coffee.svg";
import Bounce from "react-reveal/Bounce";
import Pulse from "react-reveal/Pulse";
import Jello from "react-reveal/Jello";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
  render() {
    return (
      <section className="header">
        <div className="header-main">
          <h1>Blog, Counsel and Shop</h1>
          <p className="header__slogan">
            At Clarksons we provide a place to read on concerning topics, access
            to a counsellor to help you out with personal issues and a digital
            platform to get items.{" "}
          </p>
          <Link to="/register">
            <button type="button">Sign Up</button>
          </Link>
        </div>
        <div className="header-illustration">
          <Pulse>
            <img
              id="shopper"
              src={shopper}
              alt="a person shopping at the mall"
            />
          </Pulse>
          <Bounce delay={1000}>
            <img id="reader" src={reader} alt="a person reading" />
          </Bounce>

          <Jello>
            <img id="talker" src={talker} alt="a person talking over coffee" />
          </Jello>
        </div>
      </section>
    );
  }
}
export default Header;
