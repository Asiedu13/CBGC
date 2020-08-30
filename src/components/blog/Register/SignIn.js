import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      signIn: true,
    };
  }
  render() {
    return (
      <section className="register__forms__signIn">
        
        <div className="register__forms__signIn__header">
          <h2>Sign In</h2>
        </div>

        <form action="" method="post">
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
          /><br /><br />
          <a href="/">I don't have an account.</a><br></br>
          <button>Let's continue <FontAwesomeIcon icon="angle-right" size="1x"/> </button>
        </form>
      </section>
    );
  }
}
