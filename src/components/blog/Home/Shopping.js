import React from "react";
import { ChildTwo } from "./ShoppingComp/Children";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: true,
      comp: [<ChildTwo />],
    };
  }

  render() {
    return (
      <section className="shopping">
        <section className="shopping__slider">
          <section className="art"></section>
          <div className="shopping__slider__one">
            <ChildTwo />
          </div>
        </section>
      </section>
    );
  }
}

export default Shopping;
