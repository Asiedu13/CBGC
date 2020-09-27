import React, { Component } from "react";

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      currentlyReading: "",
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
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.currentlyReading}</p>
      </div>
    );
  }
}
