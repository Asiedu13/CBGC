import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class OptionalSignup extends Component {
  render() {
    return (
      <div className="optionalSignUp">
        <button className=" options optionalSignUp__google">
            <FontAwesomeIcon icon="google" />Sign in with Google
        </button>
        <button className="options optionalSignUp__facebook">
            <FontAwesomeIcon icon="google" />Sign in with Facebook
        </button>
      </div>
    );
  }
}
