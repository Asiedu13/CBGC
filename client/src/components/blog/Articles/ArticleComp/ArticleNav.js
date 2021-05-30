import React, { Component } from "react";

export default class ArticleNav extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    let lists = document.querySelectorAll(".article-nav__ul__elem");

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
              All Posts
            </button>
            <button id="devotionals" className="article-nav__ul__elem">
              Devotionals
            </button>
            <button id="society" className="article-nav__ul__elem">
              Society
            </button>
            <button id="poetry" className="article-nav__ul__elem">
              Poetry
            </button>
            <button id="Thursday Talks" className="article-nav__ul__elem">
              Thursday Talks
            </button>
            <button id="Discipleship Class" className="article-nav__ul__elem">
              Discipleship Class
            </button>
          </ul>
        </nav>
      </div>
    );
  }
}
