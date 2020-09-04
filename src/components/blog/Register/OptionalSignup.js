import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class OptionalSignup extends Component {
  render() {
    return (
      <div className="optionalSignUp">
        <button className=" options optionalSignUp__google">
          <div>
            <FontAwesomeIcon icon={["fab", "google"]} size="2x" />
          </div>
          Sign in with Google
        </button>

        <button className="options optionalSignUp__facebook">
          <div>
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </div>
          Sign in with Facebook
        </button>
      </div>
    );
  }
}
