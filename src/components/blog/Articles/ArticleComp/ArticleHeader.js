import React, { PureComponent } from "react";
import { ArtWork } from "../Article__Arts/ArtWork";
export class ArticleHeader extends PureComponent {
  render() {
    return (
      <div className="ArticleHeader otherPageHeaders">
        <div className="ArticleHeader__heading">
          <h1>Blog</h1>
          <h1>Posts</h1>
        </div>
        <section className="header__arts">
          <ArtWork />
        </section>
      </div>
    );
  }
}
