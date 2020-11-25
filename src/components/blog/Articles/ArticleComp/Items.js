import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMarkdownText } from "../../Util/convertToHTML";
import Zoom from "react-reveal/Zoom";
class Item extends React.Component {
  
  render() {
    console.log(this.props.article._id);
    return (
      // <Zoom>
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
            <article
              dangerouslySetInnerHTML={getMarkdownText(
                this.props.article.content + "..."
              )}
            />
          </div>
          <div className="item__read__link">
            <button>
              read <FontAwesomeIcon icon="arrow-right" />{" "}
            </button>
          </div>
        </article>
      // </Zoom>
    );
  }
}
export default Item;
