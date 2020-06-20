import React from "react";

class Item extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <article className="item">
        <div className=""></div>
        <h2> {this.props.name} </h2>
        <h3> {this.props.type} </h3>
      </article>
    );
  }
}
export default Item;
