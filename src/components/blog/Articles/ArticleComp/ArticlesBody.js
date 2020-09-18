import React, { Component } from "react";
import ArticleNav from "./ArticleNav";
import Item from "./Items";
import { ArticlesBox } from "./ArticlesBox";
import ArticleViewer from "./ArticleViewer";

export class ArticlesBody extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: "",
      modified: "",
      heading: "All",
      currentReading: "",
      shouldRetreat: true,
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
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
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
        break;
      case "popular":
        this.handlePopularModification();
        break;
      case "recent":
        this.handleRecentModification();
        break;
      case "read":
        this.handleReadModification();
        break;
      case "liked":
        this.handleLikedModification();
        break;
      default:
        this.handleAllModification();
        break;
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
    this.setState({ modified: "" });
  };
  handleRecentModification = () => {};
  handleReadModification = () => {};
  handleLikedModification = () => {};

  handleShowThis = (val) => {
    console.log(val);
    this.setState((prevState) => {
      if (prevState._id !== val._id) {
        return {
          currentReading: val,
        };
      } else {
        return;
      }
    });
  };
  handleRetreat = () => {
    if (true) {
      this.setState({ currentReading: "" });
      this.setState({ shouldRetreat: false });
    }
  };
  render() {
    let DbArt =
      this.state.modified.length > 0
        ? this.state.modified.map((article) => {
            return (
              <Item
                key={article._id}
                article={article}
                onClick={(val) => {
                  this.handleShowThis(val);
                }}
              />
            );
          })
        : "No articles here";

    return (
      <div>
        {this.state.currentReading ? (
          <ArticleViewer
            article={this.state.currentReading}
            retreat={() => {
              this.handleRetreat();
            }}
          />
        ) : (
          ""
        )}

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
