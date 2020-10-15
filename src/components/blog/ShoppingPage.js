import React, { Component } from "react";
import { Header } from "./Util/Header";
export default class ShoppingPage extends Component {
  render() {
    return (
      <div>
          <Header firstHeaderName="Shop" secondHeaderName = "Here" />
        <p>This is the shopping page</p>
      </div>
    );
  }
}
