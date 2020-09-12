import React, { Component } from "react";

export default class ArticleNav extends Component {
  render() {
    return (
      <div className="article-nav-main">
        <nav className="article-nav">
          <ul className="article-nav__ul">
            <li className="article-nav__ul__elem">Popular</li>
            <li className="article-nav__ul__elem">Recent</li>
            <li className="article-nav__ul__elem">Read</li>
            <li className="article-nav__ul__elem">Liked</li>
          </ul>
        </nav>
      </div>
    );
  }
}
