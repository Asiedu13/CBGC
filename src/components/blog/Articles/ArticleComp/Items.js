import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends React.Component {
  handleClick = (value) => {
    this.props.onClick(value);
  };

  mouseOver = (e) => {
    console.log(e.currentTarget.previousSibling);
    e.currentTarget.classList.add("centre");
  };
  mouseOut = (e) => {
    console.log(e.currentTarget.previousSibling);
    e.currentTarget.classList.remove("centre");
  };
  render() {
    console.log(this.props.article.img);
    return (
      <Link to={`/reader/${this.props.article._id}`}>
        <article
          className="item"
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          <div className="item__image">
            <img
              className="img"
              alt="article-ref-pic"
              src={this.props.article.img}
            />
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
      </Link>
    );
  }
}
export default Item;
