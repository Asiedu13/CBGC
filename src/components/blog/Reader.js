import React, { Component } from "react";
import marked from "marked";
import imgs from '../../pics/attachment_77327090.png'

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      currentlyReading: "",
      img: "",
      author: "",
    };
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
          img: data.img,
          author: data.author,
        });
      });
  }
  getMarkdownText = () => {
    var rawMarkup = marked(this.state.currentlyReading, { sanitize: true });
    return { __html: rawMarkup };
  };
  render() {
    return (
      <section className="reader">
        <div className="reader__meta">
          <img alt="article cover" src={imgs} />
          <div className="reader__meta__desc">
            <h1>{this.state.title}</h1>
            <h3> {this.state.author} </h3>
          <br /> <br />
          <article className="reader__main__content" dangerouslySetInnerHTML={this.getMarkdownText()} />
          </div>
        </div>

        <article className="reader__main">
          
        </article>
      </section>
    );
  }
}
