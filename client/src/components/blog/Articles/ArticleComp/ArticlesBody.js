import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleNav from "./ArticleNav";
import Item from "./Items";
import { ArticlesBox } from "./ArticlesBox";
import Spinner from "../../Util/Spinner";
export class ArticlesBody extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: "",
      modified: "",
      heading: "All",
    };
  }

  handleValueChange = (val) => {
    this.setState({ heading: val });
    this.handleModifications(val);
  };

  handleModifications = (val) => {
    switch (val) {
      case "[a-zA-Z]i":
        console.log("Hmmm");
        break;
      default:
        console.log("Default");
        break;
    }
  };

  handleItemClick = (articleID) => {
    this.props.currentArticle(articleID);
  };

  render() {
    let DbArt =
      this.props.allArticles.length > 0 ? (
        this.props.allArticles.map((article) => {
          return (
            <Link
              to={`/articles/${article._id}`}
              style={{ textDecoration: "none" }}
              key={article._id}
            >
              <Item key={article._id} article={article} />
            </Link>
          );
        })
      ) : (
        <p className="no-articles">
          {" "}
          <Spinner />{" "}
        </p>
      );
    return (
      <div>
        <ArticleNav
          handleClick={(id) => {
            this.handleValueChange(id);
          }}
        />

        {/* General */}

        <ArticlesBox>{DbArt}</ArticlesBox>
      </div>
    );
  }
}
