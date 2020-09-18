import React from "react";
import Button from "../../Util/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrowMove } from "../../Util/JsStyle";
import { btnSecondStyle, loveAnimation } from "../../Util/JsStyle";
import pic from "../../../../pics/Shopping Bag.png";
import { Link } from "react-router-dom";

export class Head extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section className="shop">
        <div className="shop-section-1">
          <FontAwesomeIcon
            icon="heart"
            color="pink"
            size="6x"
            style={loveAnimation}
          />{" "}
          <h2>
            {" "}
            Ultimate <br /> <b>Shopping</b> <br /> Ease <br />
          </h2>
          <button style={btnSecondStyle} onClick={() => this.props.view(true)}>
            {" "}
            View{" "}
            <FontAwesomeIcon
              icon="arrow-circle-right"
              style={arrowMove}
              className="move-right"
            />{" "}
          </button>
        </div>
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
      <div className="shop-section-2">
        <div className="shopping__art">
          <img src={pic} alt="" />
        </div>

        <div className="shopping__paragraph">
          <div className="childTwoHeader">
            <h2>Shop Here at Clarkson's</h2>
          </div>
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
      </div>
    );
  }
}

export class ChildThree extends React.Component {
  render() {
    return (
      <div className="shop-section-3">
        <h1>
          Order for a <b>loved one</b>
        </h1>
        <Button label="Start" importance="high" />
      </div>
    );
  }
}
