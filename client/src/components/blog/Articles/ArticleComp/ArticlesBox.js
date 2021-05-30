import React from "react";

export class ArticlesBox extends React.Component {
  render() {
    return (
      <section className="articlesBox">
        <section className="articlesBox__body">{this.props.children}</section>
      </section>
    );
  }
}
