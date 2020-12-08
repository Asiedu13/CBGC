import React, { Component } from "react";
import img from "../../../../pics/Polygon5.png";
import img2 from "../../../../pics/attachment_77327090.png";
import Button from "../../Util/Button";
import { Link } from "react-router-dom";
import {getMarkdownText} from "../../Util/convertToHTML"

export default class ArticlePreview extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      currentlyReading: "",
      img: "",
      id: "",
    };
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  componentDidMount() {
    let pathId = window.location.pathname.split("/");
    let path = `http://localhost:5000/api/articles/short/${pathId[2]}?limit=205`;

    fetch(path)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let shortSum = data.content;

        this.setState({
          title: data.title,
          id: pathId[2],
          currentlyReading: shortSum,
          img: data.img,
        });
      });
  }
  render() {
    console.log(this.state.currentlyReading);
    let shortened = this.state.currentlyReading;

    return (
      <div style={this.props.style}>
        <section className="article__preview__maincon">
          <section className="article__preview__maincon__pre"></section>
          <section className="article__preview__maincon__items">
            <div className="pre__part pre__part__left">
              <img src={img} alt="polygon" className="part__left__imgs poly" />
              <img
                src={img2}
                alt="article cover"
                className="part__left__imgs any"
              />
            </div>
            <div className="pre__part pre__part__middle">
              <div className="pre__part__middle__header">
                <h2 className="title">{this.state.title}</h2>
              </div>
              {/* <p>{`${shortened}...`}</p> */}
              <article dangerouslySetInnerHTML={getMarkdownText(shortened)} />

              <div className="pre__part__middle__buttons">
                <Link to={`/reader/${this.state.id}`} target="top">
                  <Button label="continue..." importance="high" />
                </Link>
                {/* <Link to={`/articles`}>
                  <Button label="back" />
                </Link> */}
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
