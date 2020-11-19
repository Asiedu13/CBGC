import React from "react";
import Tree from "../Util/Art/Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";
function Paragraph1() {
  return (
    <section className="paragraph_1">
      <Slide left>
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
      </Slide>
      <Slide right>
        <div className="paragraph_1__art">
          <div className="trees">
            <Tree />
            <Tree headColor="rgb(47, 47, 196)" />
            <Tree headColor="rgb(71, 107, 228)" />
          </div>
        </div>
      </Slide>
      <svg
        className="one"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,32L80,26.7C160,21,320,11,480,32C640,53,800,107,960,133.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>{" "}
      <svg
        className="two"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L48,288C96,288,192,288,288,277.3C384,267,480,245,576,213.3C672,181,768,139,864,154.7C960,171,1056,245,1152,240C1248,235,1344,149,1392,106.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
export default Paragraph1;
