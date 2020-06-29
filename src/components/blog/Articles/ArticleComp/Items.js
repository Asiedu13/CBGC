import React from "react";
class Item extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    console.log();
    return (
      <div className="trending__body__wholeItem">
        <article
          className="trending__body__wholeItem__item"
          >
            <img src={this.props.img} alt="Doing the most" />
          </article>

        <div className="trending__body__wholeItem__item__description">
          <h2> {this.props.name} </h2>
          <h3> {this.props.type} </h3>
        </div>
      </div>
    );
  }
}
export default Item;
