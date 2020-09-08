import React, { Component } from "react";

export default class ArticleNav extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    let lists = document.querySelectorAll(".article-nav__ul__elem");
    console.log(lists);

    lists.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.handleClick(e);
      });
    });
  }

  handleClick = (e) => {
    let { id } = e.target;
    console.log(`ArticleNav: ${id}`);
    this.props.handleClick(id);
  };

  render() {
    return (
      <div className="article-nav-main">
        <nav className="article-nav">
          <ul className="article-nav__ul">
            <button className="article-nav__ul__elem" id="all">
              All
            </button>
            <button id="popular" className="article-nav__ul__elem">
              Popular
            </button>
            <button id="read" className="article-nav__ul__elem">
              Read
            </button>
            <button id="liked" className="article-nav__ul__elem">
              Liked
            </button>
            <button id="recent" className="article-nav__ul__elem">
              Recent
            </button>
          </ul>
        </nav>
      </div>
    );
  }
}
