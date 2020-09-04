import React, { Component } from "react";
import SignIn from "./Register/SignIn";
import OptionalSignUp from "./Register/OptionalSignup";
import { RegistrationContext } from "../../Contexts/RegistrationContext";
export default class RegisterPage extends Component {
  render() {
    return (
      <RegistrationContext.Consumer>
        {(context) => (
          <div className="register">
            <section className="register__pic"></section>

            <div className="register__forms">
            
              <SignIn />
              <br />
              <hr />
              <p>Or</p>
              <OptionalSignUp />
            </div>
          </div>
        )}
      </RegistrationContext.Consumer>
    );
  }
}
