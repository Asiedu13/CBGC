import React, { Component } from "react";
import { getMarkdownText } from "./Util/convertToHTML";
import imgs from "../../pics/attachment_77327090.png";
import Item from "./Articles/ArticleComp/Items";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Reader extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
      relatedArticles: "",
      relN: "",
    };
  }

  componentWillUnmount() {
    this.setState({
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
      relatedArticles: "",
    });
  }

  componentDidMount() {
    let pathId = window.location.pathname.split("/");
    let path = `http://localhost:5000/api/articles/${pathId[2]}`;

    fetch(path)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          title: data.title,
          currentlyReading: data.content,
          img: data.img,
          author: data.author,
        });
      });

    // Fetch related articles
    let randomNum = () => {
      let n = Math.floor(Math.random() * 5);
      if (this.state.relN === n) {
        randomNum();
        return;
      }
      this.setState({ relN: n });
      return n;
    };
    fetch(`http://localhost:5000/api/articles/defined/${randomNum}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          relatedArticles: data,
        });
        console.log(this.state.relatedArticles);
      })
      .catch((err) => console.log(err));
  }

  render() {
    let relArticles = this.state.relatedArticles;
    let relatedArticles =
      relArticles.length > 0
        ? this.state.relatedArticles.map((relarticle) => {
            return (
              <Link
                to={`/articles/${relarticle._id}`}
                style={{ textDecoration: "none" }}
                key={relarticle._id}
              >
                <Item key={relarticle._id} article={relarticle} />
              </Link>
            );
          })
        : "Nothing to see here ";

    return (
      <section className="reader">
        <div className="reader__meta">
          <img alt="article cover" src={imgs} />
          <div className="reader__meta__desc">
            <div className="reader__meta__desc__navigation">
              <FontAwesomeIcon
                icon={"arrow-left"}
                color="grey"
                width="200"
                size="1x"
              />
              <Link to="/articles">
                <button>back</button>
              </Link>
            </div>
            <h1>{this.state.title}</h1>
            <h3> {this.state.author} </h3>
            <br /> <br />
            <article
              className="reader__main__content"
              dangerouslySetInnerHTML={getMarkdownText(
                this.state.currentlyReading
              )}
            />
          </div>
        </div>

        <article className="reader__relatedArticles">
          <section className="reader__relatedArticles__header">
            <h2>People also read</h2>
          </section>
          <section className="reader__relatedArticles__body">
            {relatedArticles}
          </section>
        </article>
      </section>
    );
  }
}
