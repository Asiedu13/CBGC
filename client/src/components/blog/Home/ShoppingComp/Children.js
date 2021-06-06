import React from "react";
import goneShopping from "../../../../pics/gone-shopping.svg";
import Button from "../../Util/Button";
import Reveal from "react-reveal/Reveal";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

export const ChildTwo = () => {
  return (
    <div className="shop-section-2">
      <section className="shopping__paragraph">
        <Slide>
          <div className="shopping__paragraph__header">
            <h2>Clarkson's Shops</h2>
          </div>
        </Slide>
        <Slide delay={1000}>
          <div className="shopping__paragraph__text">
            <p className="shopping__paragraph__text__p">
              Clarksons shop is an online shop which aims at improving at
              quality and affordability in the realm of business. We bring you
              the best of items at enviable prices within the shortest possible
              time. With us you have no regrets. Order an item now to support a
              worthy cause.
            </p>
          </div>
        </Slide>
        <Slide delay={2000}>
          <div className="shopping__button">
            <a href="http://www.clarksonsshop.com/" rel="noreferrer noopener">
              <Button
                importance="medium"
                label="Let's Shop"
                icon="angle-right"
              />
            </a>
          </div>
        </Slide>
      </section>
      <Reveal>
        <div className="shopping__art">
          <Bounce delay={1000}>
            <img src={goneShopping} alt="woman at a mall" />
          </Bounce>
        </div>
      </Reveal>
    </div>
  );
};
