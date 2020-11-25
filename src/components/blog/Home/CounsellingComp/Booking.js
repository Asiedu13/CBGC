import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Body extends React.Component {
  render() {
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
                `<FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />{" "}
                Instagram
              </a>

              <a
                className="mail"
                href="mailto:Clarksonduku25@gmail.com?subject=Can you help me"
              >
                <FontAwesomeIcon icon={["fa", "mail-bulk"]} size="2x" /> Mail
              </a>

              <a className="tel" href="tel:+233 344 32 099">
                <FontAwesomeIcon icon="phone" size="2x" /> Call
              </a>
            </section>
          </div>

          <p className="assurance">
            Your details and issues will be remain between you and your
            counsellor
          </p>
        </section>
      </section>
    );
  }
}
export default Body;
