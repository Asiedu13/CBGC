import React, { Component } from "react";
import { Trending } from "./Trending";
export class ArticlesBody extends Component {
  render() {
    return (
      <div>
        <div className="whole__slider">
        <Trending />
        <Trending />
        <Trending />
        <Trending />

        </div>
      </div>
    );
  }
}
