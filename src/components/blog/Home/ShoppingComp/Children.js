import React from "react";
import pic from "../../../../pics/Shopping Bag.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export const ChildTwo = () => {
  return (
    <div className="shop-section-2">
      <Zoom>
        <div className="shopping__art" style={{ overflow: "hidden" }}>
          <Fade left>
            <img src={pic} alt="" />
          </Fade>
        </div>
      </Zoom>

      <div className="shopping__paragraph">
        <div className="childTwoHeader">
          <h2>Clarkson's Shops</h2>
        </div>
        <div className="shopping__paragraph__text">
          <p className="shopping__paragraph__text__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
            eveniet molestiae! Non, odit? Fuga non blanditiis dolorem nisi,
            atque incidunt corrupti similique accusantium commodi sed rerum
            porro officiis unde itaque alias! Aliquid atque ut, obcaecati nulla
            quam numquam praesentium cupiditate! Sequi maiores eveniet expedita
            blanditiis nulla cupiditate ullam explicabo!
          </p>
        </div>
        <div className="shopping__button">
          <Link to="/shopping">
            <button className="shopping__button__seemore">Let's shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
