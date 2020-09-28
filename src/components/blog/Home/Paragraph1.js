import React from "react";
import Tree from "../Util/Art/Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Paragraph1() {
  return (
    <section className="paragraph_1">
      <section>
        <FontAwesomeIcon
          icon="quote-left"
          size="2x"
          color="royalblue"
          id="q-left"
        />{" "}
        <br />
        <p>
          This blog seeks to inform society and the world of the incommode
          proliferating as a result of their actions and inactions.
        </p>
        <br />
        <i> ~ Clarkson Acheampong</i>
        <FontAwesomeIcon
          icon="quote-right"
          size="2x"
          color="royalblue"
          id="q-right"
        />
      </section>

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
