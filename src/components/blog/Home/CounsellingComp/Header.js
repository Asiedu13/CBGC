import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import Button from "../../Util/Button";

class Header extends React.Component {


  render() {
    return (
      <section className="counselling__header">
        <section className="counselling__header__name">
          <h1>Clarkson's Counsel</h1>
        </section>

      </section>
    );
  }
}
export default Header;
