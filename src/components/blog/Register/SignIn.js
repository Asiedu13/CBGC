import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegistrationContext } from "../../../Contexts/RegistrationContext";

export default class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {}
  handleSubmit() {}
  render() {
    return (
      <RegistrationContext.Consumer>
        {(context) => (
          <section className="register__forms__signIn">
            <div className="register__forms__signIn__header">
              <h2>{context.signIn ? "SignIn" : "SignUp"}</h2>
            </div>

            <form method="post" onSubmit={this.handleSubmit}>
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                id="mail"
                name="email"
                placeholder="example@gmail.com"
              />
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                id="pass"
                name="password"
                placeholder="password"
              />
              <br />
              <br />
              <a href="/">I don't have an account.</a>
              <br></br>
              <button>
                Let's continue <FontAwesomeIcon icon="angle-right" size="1x" />{" "}
              </button>
            </form>
          </section>
        )}
      </RegistrationContext.Consumer>
    );
  }
}
