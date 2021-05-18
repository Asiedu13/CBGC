import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// let copy = [%raw {|'\u00a9'|}];


let year = new Date().getFullYear();

function Footer() {
  return (
    <section className="footer">
      <div className="footer__elem">
        <li className="footer__elem__child">About Us</li>
        <li className="footer__elem__child">Our Mission</li>
        <li className="footer__elem__child">Privacy Policy</li>
      </div>

      <div className="footer__elem">
        <Link to="/shopping">
          <li className="footer__elem__child">Clarksons Shop</li>
        </Link>
        <Link to="/articles">
          <li className="footer__elem__child">Clarksons Articles</li>
        </Link>

        <li className="footer__elem__child">Clarksons Counselling </li>
      </div>
      <div className="footer__elem">
        <li className="footer__elem__child"> <FontAwesomeIcon icon={['fa', 'copyright']}/> Clarksons {year}  </li>
        <li className="footer__elem__child">+233 344 32 099 </li>
        <li className="footer__elem__child">Clarksonduku25@gmail.com</li>
        {/* <li className="footer__elem__child">P.O.Box AT 1486</li> */}

        <div className="footer__elem__socialmedia">
          {/* <p>Follow Us:</p> */}
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </div>
      </div>
    </section>
  );
}
export default Footer;
