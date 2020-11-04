import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { RegistrationContext } from "../../../Contexts/RegistrationContext";
import { validator } from "../Util/Validate";
import { fetcher } from "../Util/HTTP";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      email: "",
      password: "",
      checked: "",
      signUp: true,
      errMsg: "",
    };
  }
  //------------------ Handle input change ------------------
  handleChange = (e) => {
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

  //------------- Handle Submission --------------
  handleSubmit = (e) => {
    e.preventDefault();

    let validateState = {
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
    };

    // ------------- Sign Up -------------------

    if (this.state.signUp) {
      let p = validator(validateState);

      if (p.error) {
        this.setState({ errMsg: p.error });
      } else {
        let fetched = fetcher(
          "http://localhost:5000/api/users/include",
          validateState,
          "POST"
        ).then((confirmation) => {
          if (confirmation === "ok") {
            console.log("User created successfully");
          } else {
            console.log(`Error`);
          }
        });
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
            {/*********************  Main Form ********************/}
            <form
              action=""
              method="post"
              className="sign__up__form"
              onSubmit={this.handleSubmit}
            >
              {/*************  Email ***************/}

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

              {/*************  Password ***************/}
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

              {/*************  Phone Number ***************/}
              {context.signIn ? (
                ""
              ) : (
                <div className="sign__up__form__phone">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    min="4"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              )}

              {/*************  Agreement to Terms and Conditions ***************/}
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

              {/*************  Submit Button ***************/}
              <div className="sign__up__form__button">
                <button id="submit" type="submit">
                  Submit
                </button>

                {/*************  SignIn/Out Toggle ***************/}
                {context.signIn ? (
                  <h4>
                    Don't have an account?{" "}
                    <a
                      href="./register?signIn=true"
                      onClick={(e) => {
                        e.preventDefault();
                        context.toggleSignIn();
                        this.setState({ signUp: context.signIn, errMsg: "" });
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

            {/*************  Optional SignIn/Out ***************/}
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
