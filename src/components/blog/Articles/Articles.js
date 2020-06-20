import React from "react";
import { ArticleHeader } from "./ArticleComp/ArticleHeader";
import { ArticlesBody } from "./ArticleComp/ArticlesBody";

class Articles extends React.Component {
  render() {
    return (
      <section>
        <ArticleHeader />
        <ArticlesBody />
      </section>
    );
  }
}

export default Articles;
