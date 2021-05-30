import React, { Component } from "react";
import Items from "../../Articles/ArticleComp/Items";

export default class Posts extends Component {
  render() {
    console.log(this.props.articles);
    let result =
      this.props.articles.length >= 1
        ? this.props.articles.map((item) => {
            return (
              <section key={item._id}>
                <div className="options">
                  <button onClick={()=>this.props.deletePost(item._id)}>Delete</button>
                </div>
                <Items key={item._id} article={item} />
              </section>
            );
          })
        : "No items found";
    return (
      <section className="display__post">
        <header className="display__post__header">
          <section className="main">
            <section className="main_1">
              <h2>POSTS</h2>{" "}
              <button
                onClick={() => {
                  this.props.onModDisplay({ comp: `Creator` });
                }}
              >
                Add new
              </button>
            </section>
            <section className="main_2">
              <input
                type="search"
                name="searchBar"
                id="searcher"
                placeholder="Search here"
                onChange={this.handleSearch}
              />

              <button>Search Posts</button>
            </section>
          </section>
          <section className="sub">
            <section className="sub_1">
              <h4>
                All <span>({this.props.articles.length || 0})</span>
              </h4>{" "}
              |{" "}
              <h4>
                Published <span>({this.props.articles.length || 0})</span>
              </h4>
            </section>
            <section className="sub_2">
              <h4>{this.props.articles.length || 0} items</h4>
            </section>
          </section>
        </header>
        <br />
        <div className="display__post__result">{result}</div>
      </section>
    );
  }
}
