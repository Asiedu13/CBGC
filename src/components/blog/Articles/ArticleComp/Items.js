import React from "react";

class Item extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="trending__body__wholeItem">
        <article className="trending__body__wholeItem__item">
        </article>
          <div className="trending__body__wholeItem__item__description">
            {/* <div className=""></div> */}
            <h2> {this.props.name} </h2>
            <h3> {this.props.type} </h3>
          </div>
      </div>
    );
  }
}
export default Item;
