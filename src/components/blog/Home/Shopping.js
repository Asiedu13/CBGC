import React from "react";
import { ChildTwo, ChildThree } from "./ShoppingComp/Children";

class Shopping extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: undefined,
      viewer: true,
      comp: [<ChildTwo view={this.handleViewSiblings} />, <ChildThree />],
    };
  }

  handleViewSiblings = (val) => {
    let number = this.state.value;

    if (val) {
      if (number < this.state.comp.length) {
        number += 1;
        console.log(`The value: ${number}`);
        this.setState({ value: number });
      } else {
        number = 1;
        this.setState({ value: number });
        console.log(`The value: ${number}`);
      }
    }
    val = false;
  };
  handleBackMovememt = () => {
    let number = this.state.value;

    if (number > 0) {
      number -= 1;
      console.log(`The value: ${number}`);
      this.setState({ value: number });
    } else {
      number = 0;
      this.setState({ value: number });
      console.log(`The value: ${number}`);
    }
  };

  render() {
    return (
      <section className="shopping">
        <section className="shopping__slider">
          <section className="art"></section>
          <div className="shopping__slider__one">
            {this.state.comp[this.state.value || 0]}
          </div>
        </section>
      </section>
    );
  }
}

export default Shopping;
