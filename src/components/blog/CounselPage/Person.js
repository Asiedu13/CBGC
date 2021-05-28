import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../../pics/clarkson4.jpg";

export default function Person(props) {
  return (
    <section className="person">
      <div className="person__image">
        <img src={img1} />
      </div>
      <div className="person__info">
        <div>
          <div>
            <h3>Clarkson Acheampong</h3>
            <p>@clarksonacheampong</p>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              neque sunt accusamus unde, laboriosam aperiam architecto mollitia
              reiciendis nisi molestiae voluptatibus quaerat, explicabo quam
              totam |
            </p>
            <div className="buttons">
              <button onClick={() => props.onShowMailDialog()}> Mail me</button>
            </div>
          </div>
        </div>
        {/* // Social Media */}
        <div className="person__social">
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
