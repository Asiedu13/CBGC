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
        this.setState({ modified: data });
      });
  }
  handleValueChange = (val) => {
    this.setState({ heading: val });
    this.handleModifications(val);
  };

  handleModifications = (val) => {
    switch (val) {
      case "all":
        this.handleAllModification();
      case "popular":
        this.handlePopularModification();
      case "recent":
        this.handleRecentModification();
      case "read":
        this.handleReadModification();
      case "liked":
        this.handleLikedModification();
      default:
        this.handleAllModification();
    }
  };

  handleAllModification = () => {
    if (this.state.heading === "all") {
      if (this.state.articles.length > 0) {
        let m = this.state.articles;
        this.setState({ modified: m });
      }
    }
  };
  handlePopularModification = () => {
    this.setState({modified: ""})
  };
  handleRecentModification = () => {};
  handleReadModification = () => {};
  handleLikedModification = () => {};

  render() {
    let DbArt =
      this.state.modified.length > 0
        ? this.state.modified.map((article) => {
            return (
              <Item
                key={article._id}
                name={article.title}
                type={article.author}
              />
            );
          })
        : "No articles here";

    return (
      <div>
        <ArticleNav
          handleClick={(id) => {
            this.handleValueChange(id);
          }}
        />

        <div className="articles-body__heading">
          <h2
            className="articles-body__heading__text"
            style={{ textTransform: "capitalize" }}
          >
            {this.state.heading}
          </h2>
        </div>

        {/* General */}
        <ArticlesBox>{DbArt}</ArticlesBox>
      </div>
    );
  }
}
