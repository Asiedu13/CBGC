import React, { Component } from "react";
import Writer from "./CreatorComp/Writer";
import Image from "./CreatorComp/Image";
export default class Creator extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      image: "",
      writer: true,
      tags: "",
    };
  }
  onInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
    // console.log(this.state);
  };
  onToggleWriter = (bool) => {
    this.setState({ writer: bool });
  };
  saveImage = (data) => {
    console.log(data);
    this.setState({ image: data });
  };
  saveDraft = () => {
    let tags = this.state.tags.split(",");
    let modifiedTags = tags.filter((tag) => tag.length > 1);
    console.log(modifiedTags);
    
    let draft = {
      title: this.state.title,
      content: this.state.content,
      author: "Clarkson",
      tags: modifiedTags,
      // img: this.state.img || "Empty",
    };
    return draft;
  };
  postArticle = (e) => {
    e.preventDefault();
    console.log(this.state.image);
    // this.props.storeImage(this.state.image);
    this.props.postArticle(this.saveDraft());
  };
  // this.props.postArticle(draft);
  render() {
    return (
      <section className="creator">
        <header className="creator__header">
          <h2>Add Post</h2>
        </header>
        {/*Writer's section  */}
        <Writer
          saveDraft={this.saveDraft}
          style={this.state.writer ? { display: "block" } : { display: "none" }}
          state={this.state}
          onInputChange={(e) => this.onInputChange(e)}
          toggleWriter={(bool) => this.onToggleWriter(bool)}
        />
        {/* Image section */}
        <Image
          saveImage={(data) => this.saveImage(data)}
          postArticle={this.postArticle}
          style={this.state.writer ? { display: "none" } : { display: "flex" }}
        />

        {/* Buttons */}
      </section>
    );
  }
}
