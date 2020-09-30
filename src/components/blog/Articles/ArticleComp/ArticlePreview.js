import React, { Component } from "react";
import img from "../../../../pics/Polygon5.png";
import Button from "../../Util/Button";

export default class ArticlePreview extends Component {
  render() {
    return (
      <div>
        <section className="article__preview__maincon">
          <section className="article__preview__maincon__pre"></section>
          <section className="article__preview__maincon__items">
            <div className="pre__part pre__part__left">
              <img src={img} alt="polygon" className="part__left__imgs poly" />
              <img
                src=""
                alt="article cover"
                className="part__left__imgs any"
              />
            </div>
            <div className="pre__part pre__part__middle">
              <div className="pre__part__middle__header">
                <h2 className="title">Toxic Generation</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                laboriosam alias tempore at, amet officia natus optio eum, esse
                sit rem quidem? Suscipit recusandae debitis unde ipsa assumenda
                omnis nihil!
              </p>
              <div className="pre__part__middle__buttons">
                <Button label="expand" importance="high" />
                <Button label="back" />
              </div>
            </div>
            <div className="pre__part pre__part__right">
              <div className="options">{/* Icons */}</div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
