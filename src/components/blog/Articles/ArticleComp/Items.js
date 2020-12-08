import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getMarkdownText} from '../../Util/convertToHTML'

class Item extends React.Component {
  mouseOver = (e) => {
    console.log(e.currentTarget.previousSibling);
    // e.currentTarget.classList.add("centre");
  };
  mouseOut = (e) => {
    console.log(e.currentTarget.previousSibling);
    // e.currentTarget.classList.remove("centre");
  };

  render() {
    console.log(this.props.article._id);
    return (
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
          {/* <p>{this.props.article.content}...</p> */}
          <article dangerouslySetInnerHTML={getMarkdownText(this.props.article.content + "...")} />
        </div>
        <br/>
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
