import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      checked: "",
    };
  }

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

  render() {
    return (
      <section className="sign__up">
        <header className="sign__up__header">
          <h2>Sign Up</h2>
        </header>

        <form action="" method="post" className="sign__up__form">
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

          <div className="sign__up__form__email">
            <input
              type="email"
              name="email"
              id="email"
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
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

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

          <div className="sign__up__form__button">
            <button>Submit</button>
            <h4>
              Already have an account?{" "}
              <a href="./register" rel="noopener noreferrer">
                Log in
              </a>
            </h4>
          </div>
        </form>

        <section className="sign__up__optional">
          <header>Or sign up with</header>
          <div className="options">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "google"]} size="2x" />
          </div>
        </section>
      </section>
    );
  }
}
