import React from "react";
import { Head, ChildTwo, ChildThree } from "./ShoppingComp/Children";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Shopping extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: undefined,
      viewer: true,
      comp: [
        <Head view={this.handleViewSiblings} />,
        <ChildTwo view={this.handleViewSiblings} />,
        <ChildThree />,
      ],
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
          <div className="shopping__slider__one">
            <FontAwesomeIcon
              icon="arrow-circle-left"
              style={moveBackStyle}
              size="2x"
              onClick={this.handleBackMovememt}
            />
            {this.state.comp[this.state.value || 0]}
          </div>
        </section>
      </section>
    );
  }
}

let moveBackStyle = {
  position: "absolute",
  width: "30px",
  height: "30px",
  borderRadius: "30px",
  cursor: "pointer",
  top: "10px",
  left: "10px",
  boxShadow: "1px 1px 10px #fff",
};

export default Shopping;
