import React from "react";
import { ArticleHeader } from "./Articles/ArticleComp/ArticleHeader";
import { ArticlesBody } from "./Articles/ArticleComp/ArticlesBody";
import ArticlePreview from "./Articles/ArticleComp/ArticlePreview";
class Articles extends React.Component {
  render() {
    return (
      <section>
        <ArticleHeader />
        <ArticlesBody />
        <ArticlePreview />
      </section>
    );
  }
}

export default Articles;
