import React, { Component } from "react";
import ArticleNav from './ArticleNav';
import { ArticlesBox } from "./ArticlesBox";
export class ArticlesBody extends Component {
  render() {
    return (
      <div>
        {/* favourite section */}

        {/* Navigation */}
        <ArticleNav />
        {/* Heading */}
        <div className="articles-body__heading">
          <h2 className="articles-body__heading__text"> Any </h2>
        </div>

        {/* General */}
        <ArticlesBox>

        </ArticlesBox>
      </div>
    );
  }
}
