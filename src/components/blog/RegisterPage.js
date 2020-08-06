import React, { Component } from "react";
import SignIn from "./Register/SignIn";
import OptionalSignUp from './Register/OptionalSignup';
export default class RegisterPage extends Component {
  render() {
    return (
      <div className="register">
        <section className="register__pic"></section>


        <div className='register__forms'>
        <SignIn />
        <br/> 
        <hr/>
        <p>Or</p>
        <OptionalSignUp />
        </div>
      </div>
    );
  }
}
