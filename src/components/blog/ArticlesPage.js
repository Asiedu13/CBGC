import React from "react";
import { ArticleHeader } from "./Articles/ArticleComp/ArticleHeader";
import { ArticlesBody } from "./Articles/ArticleComp/ArticlesBody";

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
