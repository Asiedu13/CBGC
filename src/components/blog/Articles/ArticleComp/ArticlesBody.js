import React, { Component } from "react";
import ArticleNav from "./ArticleNav";
import Item from "./Items";
import { ArticlesBox } from "./ArticlesBox";

export class ArticlesBody extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: "",
      modified: "",
      heading: "All",
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
  handleValueChange = (val) => {
    console.log(`ArticlesBody: ${val}`);
    this.setState({ heading: val });
  };

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
      <div>
        <ArticleNav
          handleClick={(id) => {
            this.handleValueChange(id);
          }}
        />

        <div className="articles-body__heading">
          <h2 className="articles-body__heading__text" style={{textTransform: 'capitalize'}} >{this.state.heading}</h2>
        </div>

        {/* General */}
        <ArticlesBox>{DbArt}</ArticlesBox>
      </div>
    );
  }
}
