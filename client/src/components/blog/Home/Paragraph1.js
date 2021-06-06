import React from "react";
import Tree from "../Util/Art/Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";

const Paragraph1 = () => {
  return (
    <section className="paragraph_1">
      <div className="paragraph_1-main">
        <Slide left>
          <section className="quote">
            <FontAwesomeIcon icon="quote-left" size="2x" id="q-left" /> <br />
            <p>
              This blog seeks to inform society and the world of the incommode
              proliferating as a result of their actions and inactions.
            </p>
            <br />
            <i> ~ Clarkson Acheampong</i>
            <FontAwesomeIcon
              icon="quote-right"
              size="2x"
              color="$primary"
              id="q-right"
            />
          </section>
        </Slide>

        <div className="trees">
          <Tree />
          <Tree headColor="rgb(47, 47, 196)" />
          <Tree headColor="rgb(71, 107, 228)" />
        </div>
      </div>
    </section>
  );
};
export default Paragraph1;
