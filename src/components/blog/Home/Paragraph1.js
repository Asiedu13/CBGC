import React from "react";
import Tree from "../Art/Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Paragraph1() {
  return (
    <section className="paragraph_1">
      <p>
        <FontAwesomeIcon
          icon="quote-left"
          size="2x"
          color="royalblue"
          id="q-left"
        />{" "}
        <br />
        <b className="quote-item">inform.</b>{" "}
        <b className="quote-item">inspire.</b>{" "}
        <b className="quote-item">refactor.</b>
        <br />
        <i> ~ Clarkson Acheampong</i>
        <FontAwesomeIcon
          icon="quote-right"
          size="2x"
          color="royalblue"
          id="q-right"
        />
      </p>

      <div className="paragraph_1__art">
        <div className="trees">
          <Tree />
          <Tree headColor="rgb(47, 47, 196)" />
          <Tree headColor="rgb(71, 107, 228)" />
        </div>
      </div>
    </section>
  );
}
export default Paragraph1;
