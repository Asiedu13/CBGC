import React, { Component } from "react";
import img1 from "../../../../../pics/clarkson4.jpg";
export default class Image extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      img: "",
    };
  }

  fileChange = async (e) => {
    e.preventDefault();

    e.accept = "image/*";
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      this.setState({ image: file });
      console.log(file);
    } else {
      this.setState({ image: null });
    }
    // const reader = new FileReader();
    // if(this.state.image) {

    //   reader.onloadend = () => {
    //     this.setState({img: reader.result,});
    //   };
    this.props.saveImage(this.state.image);
    console.log(this.state.image);
  };
  // reader.readAsText(this.state.image);
  // reader.readAsDataURL(this.state.image);
  // reader.readAsBinaryString(this.state.image);

  render() {
    return (
      <section className="creator__image" style={this.props.style}>
        <section className="main">
          <section className="preview" id="creator__preview">
            <img src={this.state.img} alt=" " />
          </section>

          <section className="select">
            <h2>Include Image</h2>
            <form
              // method="POST"
              encType="multipart/form-data"
              // action="http://localhost:5000/api/articles/img"
            >
              <input type="file" onChange={this.fileChange} />
            </form>
          </section>
        </section>
        <section className="flow">
          <button onClick={this.props.postArticle}> Post Article </button>
        </section>
      </section>
    );
  }
}
