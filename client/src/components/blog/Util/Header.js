import React, { PureComponent } from "react";

export class Header extends PureComponent {
  render() {
    return (
      <div className="ArticleHeader otherPageHeaders">
        <div className="ArticleHeader__heading">
          <h1>
            {this.props.firstHeaderName} {this.props.secondHeaderName}
          </h1>
          <p>{this.props.niche}</p>
        </div>
        <section className="header__arts">
          <img src={this.props.illustration} alt={this.props.altText} />
        </section>
      </div>
    );
  }
}
