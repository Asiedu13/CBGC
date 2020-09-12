import React from "react";
import Item from "./Items";

export class ArticlesBox extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/articles")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ articles: data });
      });
  }

  render() {
    let DbArt =
      this.state.articles.length > 0
        ? this.state.articles.map((article) => {
            return (
              <Item
                key={article._id}
                name={article.title}
                type={article.author}
              />
            );
          })
        : "undefined";
    return (
      <section className="articlesBox">
        <section className="articlesBox__header">Trending</section>
        <section className="articlesBox__body">{DbArt}</section>
      </section>
    );
  }
}
