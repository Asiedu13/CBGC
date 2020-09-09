import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends React.Component {
  constructor(props) {
    super();
  }

  handleClick = (value) => {
    this.props.onClick(value);
  };
  render() {
    return (
      <article
        className="item"
        onClick={() => {
          this.handleClick(this.props.article);
        }}
      >
        <div className="item__image">
          <h2 className="img">I am an image</h2>
        </div>
        <div className="item__desc">
          <h2> {this.props.article.title} </h2>
          <h3> {this.props.article.author} </h3>
        </div>
        <div className="item__read__link">
          <button>
            read <FontAwesomeIcon icon="arrow-right" />{" "}
          </button>
        </div>
      </article>
    );
  }
}
export default Item;
