import React from "react";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrowMove } from "../../JsStyle";
import {
  btnSecondStyle,
  phoneStyle,
  mainStyle,
  conStyle,
  ChildTwoStyle,
} from "../../JsStyle";
import pic from "../../../../pics/Shopping Bag.png";
import { Link } from "react-router-dom";

export class Head extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section className="shop" style={mainStyle}>
        <div className="shop__heading" style={conStyle}>
          <h2>
            {" "}
            Ultimate <br /> <b>Shopping</b> <br /> <i>Ease</i> <br />
            <FontAwesomeIcon icon="heart" color="pink" size="5x" />{" "}
          </h2>
        </div>

        <button style={btnSecondStyle} onClick={() => this.props.view(true)}>
          {" "}
          View{" "}
          <FontAwesomeIcon
            icon="arrow-circle-right"
            style={arrowMove}
            className="move-right"
          />{" "}
        </button>
      </section>
    );
  }
}

export class ChildTwo extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div style={ChildTwoStyle}>
        <div className="childTwoHeader">
          <h2>Shop Here at Clarkson's</h2>
        </div>
        <div className="shopping__art">
          <img src={pic} alt="" />
        </div>

        <div className="shopping__paragraph">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab natus
            excepturi iusto aliquid tempora dolore at cupiditate nam tempore off
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab natus
            excepturi iusto aliquid tempora dolore at cupiditate nam tempore
            officiis velit quam, neque vel? Inventore minima ea ad non
            velit?iciis velit quam, neque vel? Inventore minima ea ad non v
          </p>
          <div className="shopping__button">
            <button
              className="shopping__button__seemore"
              onClick={() => this.props.view(true)}
            >
              See more
            </button>
            <Link to="/shopping">
              <Button label="let's shop" importance="high" />
            </Link>
          </div>
        </div>

        <section className="phone__art" style={phoneStyle}>
          <div className="phone__cover">
            <div className="phone__cover__inner"></div>
            <button className="phone__cover__btn"></button>
          </div>
        </section>
      </div>
    );
  }
}

export class ChildThree extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Order for a <b>loved one</b>
        </h1>
        <Button label="Start" importance="high" />
      </div>
    );
  }
}
