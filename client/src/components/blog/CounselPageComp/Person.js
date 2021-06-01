import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../../pics/clarkson4.jpg";

export default function Person(props) {
  return (
    <section className="person">
      <div className="person__image">
        <img src={img1} alt=" " />
      </div>
      <div className="person__info">
        <div>
          <div>
            <h3>Clarkson Acheampong</h3>
            <p>@clarksonacheampong</p>
          </div>
          <div>
            <p>
              Clarkson majors in mental health issues pertaining to the youth.
              After studying psychology for three years his passions led him to
              the field of clinical psychology. Clarkson can help you
              understand, prevent, and alleviate psychologically-caused distress
              or dysfunction, and promote your individual well-being and
              personal development. Contact today for an initial consulatation.
            </p>
            <div className="buttons">
              <button onClick={() => props.onShowMailDialog()}> Mail me</button>
            </div>
          </div>
          foote
        </div>
        {/* // Social Media */}
        <div className="person__social">
          <div className="icons">
            <a
              href="http://www.twitter.com/clarksonsblog"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a
              href="http://www.facebook.com/clarksonsblog"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a
              href="http://www.instagram.com/clarksonsblog"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
