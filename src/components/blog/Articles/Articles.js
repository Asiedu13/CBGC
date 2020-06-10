import React from "react";
import { ArticleHeader } from "./ArticleHeader";
import { ArticlesBody } from "./ArticlesBody";

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
