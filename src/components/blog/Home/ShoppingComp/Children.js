import React from "react";
import pic from "../../../../pics/Shopping Bag.png";
import { Link } from "react-router-dom";

export const ChildTwo = () => {
  return (
    <div className="shop-section-2">
      <div className="shopping__art">
        <img src={pic} alt="" />
      </div>

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
