import React, { Component } from "react";

export default class Writer extends Component {
  render() {
    return (
      <section className="writer" style={this.props.style}>
        <section className="title">
          <input
            type="text"
            value={this.props.state.title}
            placeholder="Title"
            name="title"
            onChange={(e) => this.props.onInputChange(e)}
          />
          <input
            type="text"
            name="tags"
            placeholder="tags"
            onChange={(e) => this.props.onInputChange(e)}
          />
        </section>

        <section className="textarea">
          <textarea
            name=""
            id=""
            rows="10"
            value={this.props.state.content}
            name="content"
            onChange={(e) => this.props.onInputChange(e)}
          ></textarea>
        </section>

        <section className="creator__flow">
          <button
            onClick={this.props.saveDraft}
            onClick={() => {
              this.props.toggleWriter(false);
            }}
          >
            Add Image
          </button>
        </section>
      </section>
    );
  }
}
