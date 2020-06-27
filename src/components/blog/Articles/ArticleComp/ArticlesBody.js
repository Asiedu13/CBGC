import React, { Component } from "react";
import { Trending } from "./Trending";
export class ArticlesBody extends Component {
  render() {
    return (
      <div>
        <div className="trending__slider">
        <Trending />

        </div>
      </div>
    );
  }
}
