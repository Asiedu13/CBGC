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
    console.log(this.props.article.img)
    return (
      <article
        className="item"
        onClick={() => {
          this.handleClick(this.props.article);
        }}
      >
        <div className="item__image">
          <img className="img" alt="article-ref-pic" src={this.props.article.img} />
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
