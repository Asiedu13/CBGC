import React from "react";
import { Header } from "./Util/Header";
import ArticlePreview from "./Articles/ArticleComp/ArticlePreview";
import { ArticlesBody } from "./Articles/ArticleComp/ArticlesBody";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      currentArticle: "",
    };
  }
  componentDidMount() {
    console.log(this.state.currentArticle);
  }
  render() {
    console.log(`This is the current article: ${this.state.currentArticle}`);

    return (
      <section>
        <Header firstHeaderName="Blog" secondHeaderName="Posts" />
        <ArticlesBody
          currentArticle={(articleID) => {
            this.setState({
              currentArticle: articleID,
            });
          }}
        />
        <ArticlePreview
          style={
            this.state.currentArticle.length > 1
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
