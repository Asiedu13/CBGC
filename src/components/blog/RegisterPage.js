import React, { Component } from "react";
import SignIn from "./Register/SignIn";
import pic from '../../pics/boy.png'
export default class RegisterPage extends Component {
  render() {
    return (
      <div className="register">
        <section className="register__pic">
          {/* <img src={pic} alt=""/> */}
        </section>

        <SignIn />
      </div>
    );
  }
}
