import React, { PureComponent } from "react";
import { ArtWork } from "../Articles/Article__Arts/ArtWork";

export class Header extends PureComponent {
  render() {
    return (
      <div className="ArticleHeader otherPageHeaders">
        <div className="ArticleHeader__heading">
          <h1>{this.props.firstHeaderName}</h1>
          <h1>{this.props.secondHeaderName}</h1>
        </div>
        <section className="header__arts">
          <ArtWork />
        </section>
      </div>
    );
  }
}
