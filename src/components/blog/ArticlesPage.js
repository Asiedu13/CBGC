import React from "react";
import { ArticleHeader } from "./Articles/ArticleComp/ArticleHeader";
import { ArticlesBody } from "./Articles/ArticleComp/ArticlesBody";
import ArticlePreview from "./Articles/ArticleComp/ArticlePreview";

class Articles extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentArticle: "",
    };
  }
  render() {
    console.log(`This is the current article: ${this.state.currentArticle}`);
    return (
      <section>
        <ArticleHeader />
        <ArticlesBody
          currentArticle={(articleID) => {
            this.setState({
              currentArticle: articleID,
            });
          }}
        />
        <ArticlePreview
          style={
            this.state.currentArticle.length > 2
              ? { display: "flex" }
              : { display: "none" }
          }
          currentArticle={this.state.currentArticle}
        />
      </section>
    );
  }
}

export default Articles;
