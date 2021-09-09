import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let year = new Date().getFullYear();

function Footer() {
  return (
    <section className="footer">
      <div className="footer__elem">
        <li className="footer__elem__child">About Us</li>
        <Link to="/user_rights#policies_mission">
          <li className="footer__elem__child">Our Mission</li>
        </Link>
        <Link to="/user_rights#policies_privacy">
          <li className="footer__elem__child">Privacy Policy</li>
        </Link>
      </div>

      <div className="footer__elem">
        <li className="footer__elem__child">
          {" "}
          <a href="http://www.clarksonsshop.com/" rel="noreferrer noopener">
            Clarksons Shop
          </a>
        </li>

        <Link to="/articles">
          <li className="footer__elem__child">Clarksons Articles</li>
        </Link>

        <li className="footer__elem__child">Clarksons Counselling </li>
      </div>
      <div className="footer__elem">
        <li className="footer__elem__child">
          {" "}
          <FontAwesomeIcon icon={["fa", "copyright"]} /> Clarksons {year}{" "}
        </li>
        <li className="footer__elem__child">+233204087721 </li>
        <li className="footer__elem__child">clarksonsblog@gmail.com</li>
        {/* <li className="footer__elem__child">P.O.Box AT 1486</li> */}

        <div className="footer__elem__socialmedia">
          {/* <p>Follow Us:</p> */}
          <a href="http://www.twitter.com/clarksonsblog" rel="noreferrer noopener"> 
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>

          <a href="http://www.facebook.com/clarksonsblog" rel="noreferrer noopener">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="http://www.instagram.com/clarksonsblog" rel="noreferrer noopener">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Footer;
