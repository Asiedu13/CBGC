import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMarkdownText } from "../../Util/convertToHTML";
import articleImg from '../../../../pics/undraw_well_done_i2wr.svg'
import articleImg2 from '../../../../pics/undraw_happy_birthday_s72n.svg'

class Item extends React.Component {
  render() {
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
            // src={this.props.article.img}
            src={articleImg}
          />
        </div>
        <div className="item__main">
          <div className="meta-data">
            <div className="meta-data-main">
              <div className="meta-data-main-avatar">
                <img src={articleImg2} alt="" />
              </div>
              <div className="meta-data-main-text">
                <h3>{this.props.article.author}</h3>
                <span>29 Jul 2010 . Solutions Architecture</span>
              </div>
            </div>
            <div className="meta-data-options"></div>
          </div>
          <div className="item__main__desc">
            <h2> {this.props.article.title} </h2>
            {/* <h3> {this.props.article.author} </h3> */}
            {/* <p>{this.props.article.content}...</p> */}
            <article
              dangerouslySetInnerHTML={getMarkdownText(
                this.props.article.content + "..."
              )}
            />
          </div>
          <div className="item__main__read__link">
            <button>
              Continue reading <FontAwesomeIcon icon="arrow-right" />{" "}
            </button>
          </div>
        </div>
      </article>
    );
  }
}
export default Item;
