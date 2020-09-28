import React, { Component } from "react";

export const RegistrationContext = React.createContext();

export class RegistrationProvider extends Component {
  constructor() {
    super();
    this.state = {
      signIn: true,
    };
  }
  render() {
    return (
      <RegistrationContext.Provider
        value={{
          signIn: this.state.signIn,
          
          toggleSignIn: () => {
            if (this.state.signIn) {
              this.setState({ signIn: false });
            } else if (this.state.signIn === false) {
              this.setState({ signIn: true });
            }
          },
        }}
      >
        {this.props.children}
      </RegistrationContext.Provider>
    );
  }
}
