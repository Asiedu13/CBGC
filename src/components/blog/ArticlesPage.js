import React from "react";
import { Header } from "./Util/Header";
import ArticlePreview from "./Articles/ArticleComp/ArticlePreview";
import { ArticlesBody } from "./Articles/ArticleComp/ArticlesBody";
import pic from '../../pics/standing-reading.svg';

class Articles extends React.Component {
  constructor(props) {
    super(props);
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
        <Header firstHeaderName="Blog Posts" illustration={pic} altText="A person reading an article" niche="A repository of awesome articles on a variety of topics" />
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
