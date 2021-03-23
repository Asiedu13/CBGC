import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Body = () => {
  return (
    <section className="counselling__booking">
      <section className="counselling__booking__part1">
        <h2>
          Speak to a <big>counsellor</big> today
        </h2>

        <div className="contact">
          <p>Send a message to get help </p>

          <section className="contact__links">
            <a className="insta" href="instagram://user?username={username}">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="2x"
                color="grey"
                style={{ paddingRight: "10px" }}
              />{" "}
              Instagram
            </a>

            <a className="mail" href="mailto:Clarksonduku25@gmail.com">
              <FontAwesomeIcon
                icon={["fa", "mail-bulk"]}
                size="2x"
                color="grey"
                style={{ paddingRight: "10px" }}
              />{" "}
              Mail
            </a>

            <a className="tel" href="tel:+233 344 32 099">
              <FontAwesomeIcon
                icon="address-book"
                size="2x"
                color="grey"
                style={{ paddingRight: "10px" }}
              />{" "}
              Call
            </a>
          </section>
        </div>

        <p className="assurance">
          Your details and issues will be remain between you and your counsellor
        </p>
      </section>
    </section>
  );
};
export default Body;
