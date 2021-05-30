import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="adminNav">
        <ul>
          <li
            onClick={() => {
              this.props.onModDisplay({ comp: `Posts` });
            }}
          >
            Posts
          </li>
          <li  onClick={(comp) => {
              this.props.onModDisplay({ comp: `Users` });
            }}>Users</li>
        </ul>
      </nav>
    );
  }
}
