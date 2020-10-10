import React, { Component } from "react";
import marked from "marked";
import imgs from "../../pics/attachment_77327090.png";
import Item from "./Articles/ArticleComp/Items"
import { Link } from "react-router-dom";

export default class Reader extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
      relatedArticles: "",
    };
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
    fetch("http://localhost:5000/api/articles/defined/3").then(data => {
      return data.json();
    }).then(data => {
      this.setState({
        relatedArticles: data,
      })
      console.log(this.state.relatedArticles);
    }).catch(err => console.log(err));
  }
  getMarkdownText = () => {
    var rawMarkup = marked(this.state.currentlyReading, { sanitize: true });
    return { __html: rawMarkup };
  };
  render() {
    let relArticles = this.state.relatedArticles;
    let relatedArticles = relArticles.length > 0 ? this.state.relatedArticles.map(relarticle => {
      return (<Link
        to={`/articles/${relarticle._id}`}
        style={{ textDecoration: "none" }} key={relarticle._id}
      >
        <Item key={relarticle._id} article={relarticle} />
      </Link>)
    }) : "Nothing to see here ";

    return (
      <section className="reader">
        <div className="reader__meta">
          <img alt="article cover" src={imgs} />
          <div className="reader__meta__desc">
            <h1>{this.state.title}</h1>
            <h3> {this.state.author} </h3>
            <br /> <br />
            <article
              className="reader__main__content"
              dangerouslySetInnerHTML={this.getMarkdownText()}
            />
          </div>
        </div>

        <article className="reader__main">
          <section className="reader__main__header">
            <h2>People also read</h2>
          </section>
          <section className="reader__main__body">
            {relatedArticles}
          </section>
        </article>
      </section>
    );
  }
}
