import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { RegistrationContext } from "../../../Contexts/RegistrationContext";
import { validator } from "../Util/Validate";
import { fetcher } from "../Util/HTTP";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      checked: "",
      signUp: true,
      errMsg: "",
    };
  }

  handleChange = (e) => {
    //----------- Setting the properties from the target Element to state -------------
    let { checked, value, name, type } = e.target;
    console.log(checked, value, name);
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
          checked,
        });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    // ------------- Prevent Default behaviour ------------
    e.preventDefault();

    let validateState = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    // ------------- Sign Up -------------------
    if (this.state.signUp) {
      let p = validator(validateState);

      if (p.error) {
        this.setState({ errMsg: p.error });
      } else {
        let fetched = fetcher(
          "http://localhost:5000/api/users",
          validateState,
          "POST"
        );
        console.log(fetched);
      }
    }

    // --------------- Sign In --------------------
    else {
      console.log("We are not signing up");
    }
  };

  render() {
    return (
      <RegistrationContext.Consumer>
        {(context) => (
          <section className="sign__up">
            <header className="sign__up__header">
              <h2>{context.signIn ? "SignIn" : "SignUp"}</h2>
              {this.state.errMsg ? (
                <div className="error">
                  <h3> {this.state.errMsg} </h3>
                </div>
              ) : (
                ""
              )}
            </header>

            <form
              action=""
              method="post"
              className="sign__up__form"
              onSubmit={this.handleSubmit}
            >
              {context.signIn ? (
                ""
              ) : (
                <div className="sign__up__form__username">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    min="4"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
              )}

              <div className="sign__up__form__email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="sign__up__form__password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              {context.signIn ? (
                ""
              ) : (
                <div className="sign__up__form__agreement">
                  <input
                    type="checkbox"
                    name="checked"
                    id="agreement"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                  />

                  <p>
                    Accept the <b>Terms and Conditions </b>
                  </p>
                </div>
              )}

              <div className="sign__up__form__button">
                <button id="submit" type="submit">
                  Submit
                </button>
                {context.signIn ? (
                  <h4>
                    Don't have an account?{" "}
                    <a
                      href="./register?signIn=true"
                      onClick={(e) => {
                        e.preventDefault();
                        context.toggleSignIn();
                        this.setState({ signUp: context.signIn, errMsg: "", });
                      }}
                      rel="noopener noreferrer"
                    >
                      Sign up
                    </a>
                  </h4>
                ) : (
                  <h4>
                    Already have an account?{" "}
                    <a
                      href="./register"
                      onClick={(e) => {
                        e.preventDefault();
                        context.toggleSignIn();
                        this.setState({ signUp: context.signIn, errMsg: "" });
                      }}
                      rel="noopener noreferrer"
                    >
                      Log in
                    </a>
                  </h4>
                )}
              </div>
            </form>

            <section className="sign__up__optional">
              <header>
                {context.signIn ? "Or sign in with" : "Or sign up with"}
              </header>
              <div className="options">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                <FontAwesomeIcon icon={["fab", "google"]} size="2x" />
              </div>
            </section>
          </section>
        )}
      </RegistrationContext.Consumer>
    );
  }
}
