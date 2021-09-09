import React, { Component } from "react";
import { getMarkdownText } from "./Util/convertToHTML";
import imgs from "../../pics/feeling-blue.svg";
import Item from "./Articles/ArticleComp/Items";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "./Util/Spinner";
import Loader from "./Util/Loader";

export default class Reader extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
      relatedArticles: "",
      relN: "",
      tags: "",
      views: '',
      comments: '',
      likes: ''
    };
  }

  componentWillUnmount() {
    this.setState({
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
      relatedArticles: "",
    });
  }

  componentDidMount() {
    let pathId = window.location.pathname.split("/");
    let path = `http://localhost:5000/api/articles/${pathId[2]}`;

    fetch(path)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          title: data.title,
          currentlyReading: data.content,
          img: data.imgUrl,
          author: data.author,
          tags: data.tags,
          views: data.nOfViews,
          likes: data.nOfLikes,
        });
      });

    // Fetch related articles
    let randomNum = () => {
      let n = Math.floor(Math.random() * 5);
      if (this.state.relN === n) {
        randomNum();
        return;
      }
      this.setState({ relN: n });
      return n;
    };
    fetch(`http://localhost:5000/api/articles/defined/${randomNum}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          relatedArticles: data,
        });
        console.log(this.state.relatedArticles);
      })
      .catch((err) => console.log(err));
  }

  render() {
    let articleTags = this.state.tags;
    let currentArticleTags =
      articleTags.length > 0
        ? this.state.tags.map((tag) => {
            return <span class="article-tag">{tag}</span>;
          })
        : "";
    let relArticles = this.state.relatedArticles;
    let relatedArticles =
      relArticles.length > 0 ? (
        this.state.relatedArticles.map((relarticle) => {
          return (
            <Link
              to={`/articles/${relarticle._id}`}
              style={{ textDecoration: "none" }}
              key={relarticle._id}
            >
              <Item key={relarticle._id} article={relarticle} />
            </Link>
          );
        })
      ) : (
        <Spinner />
      );

    return (
      this.state.title ?
      (<section className="reader">
        <div className="reader__meta">
          <img alt="article cover" src={this.state.img} />
          <div className="reader__meta__desc">
            <div className="reader__meta__desc__navigation">
              <FontAwesomeIcon
                icon={"arrow-left"}
                color="grey"
                width="200"
                size="1x"
              />
              <Link to="/articles">
                <button>back</button>
              </Link>
            </div>
            <h1>{this.state.title}</h1>
            <h3> {this.state.author} </h3>
            <br /> <br />
            <article
              className="reader__main__content"
              dangerouslySetInnerHTML={getMarkdownText(
                this.state.currentlyReading
              )}
            />
            <section className="outlets">
              <div className="tags">
                {/* <h2>These are the tags</h2> */}
                {currentArticleTags}
              </div>
              <hr />
              <div className="social_media">
                <div className="social_media_icons">
                  <a
                    href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fcbgc-backend.herokuapp.com%2F"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
                  </a>

                  <a
                    href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fcbgc-backend.herokuapp.com%2F&text=Tips%2C+Article%2C+about+Something+written+by+clarkson.&hashtags=love,articles"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
                  </a>

                  <a
                    href="http://www.instagram.com/clarksonsblog"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="1.5x" />
                  </a>

                  <a
                    href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fcbgc-backend.herokuapp.com%2F"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
                  </a>
                  
                  <a
                    href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fcbgc-backend.herokuapp.com%2F"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={["fa", "w"]} size="1x" />
                  </a>

                </div>
                <div className="mainTag">
                  <h4>{this.state.tags ? this.state.tags[0]: ""}</h4>
                </div>
              </div>
              <hr />
              <div className="theOtherContent">
                <span>{this.state.views} views</span> 
                <span>
                  {this.state.likes}
                    <FontAwesomeIcon icon={["fa", "heart"]} size="1x" />
                </span>
              </div>
            </section>
          </div>
        </div>
        <article className="reader__relatedArticles">
          <section className="reader__relatedArticles__header">
            <h2>People also read</h2>
          </section>
          <section className="reader__relatedArticles__body">
            {relatedArticles}
          </section>
        </article>
        
      </section>): <Loader />
    );
  }
}
