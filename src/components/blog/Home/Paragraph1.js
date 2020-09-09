import React from "react";
import Tree from "../Util/Art/Tree";
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
          <p>
          THIS BLOG SEEKS TO INFORM SOCIETY AND THE WORLD AT LARGE OF THE INCOMMODE PROLIFERATING AS A RESULT OF THEIR ACTIONS AND INACTIONS
          </p>
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
