import React, { Component } from "react";
import { Header } from "./Util/Header";
import Person from "./CounselPage/Person";
import Mail from "./CounselPage/Mail";

export default class CounsellingPage extends Component {
  constructor() {
    super();
    this.state = {
      showMailDialog: false,
    };
  }

  toggleMailDialog = () => {
    console.log(this.state);
    this.setState({
      showMailDialog: !this.state.showMailDialog,
    });
  };
  render() {
    return (
      <section>
        <Header firstHeaderName="Clarksons" secondHeaderName="Counsel" />

        <section className="counsel__main">
          <header className="counsel__main__header">
            <h1>Available Counsellor</h1>
          </header>

          <section className="counsel__main___content">
            <Person onShowMailDialog={this.toggleMailDialog} />
          </section>
        </section>

        <section>
          {this.props.verifiedMail ? (
            <div>
              <h2>Mail Sent</h2>
            </div>
          ) : this.state.showMailDialog ? (
            <Mail onHideMailDialog={this.toggleMailDialog} onSendMail={this.props.onSendMail} />
          ) : (
            " "
          )}
        </section>
      </section>
    );
  }
}
