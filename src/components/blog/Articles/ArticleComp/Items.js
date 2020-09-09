import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <article className="item">
        <div className="item__image">
          <h2 className="img">I am an image</h2>
        </div>
        <div className="item__desc">
          <h2> {this.props.name} </h2>
          <h3> {this.props.type} </h3>
        </div>
        <div className="item__ratings"></div>
      </article>
    );
  }
}
export default Item;
