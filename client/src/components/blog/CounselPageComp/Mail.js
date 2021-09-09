import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Mail extends Component {
  constructor(props) {
    super();
    this.state = {
      subject: "",
      mailbody: "",
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({
      subject: "",
      mailbody: "",
    });
  };
  onSubmit = (e) => {
    console.log(this.state);
    this.props.onSendMail(this.state);
  };
  render() {
    return (
      <section className="mailBox">
        {/* Menubar */}
        <section className="mailBox__menubar">
          <div className="title">
            <h2>Compose Email</h2>
          </div>
          <div className="menu_actions">
            <FontAwesomeIcon
              icon={["fa", "times"]}
              onClick={this.props.onHideMailDialog}
            />
          </div>
        </section>
        {/* Mail subject and body */}
        <section className="mailBox__body">
          <div className="subject">
            <span>Subject:</span>
            <input
              type="text"
              name="subject"
              id="subject"
              value={this.state.subject}
              onChange={this.onChange}
            />
          </div>
          <div className="rest">
            <textarea
              name="mailbody"
              id="mail-body"
              rows="10"
              placeholder="Type here..."
              onChange={this.onChange}
              value={this.state.mailbody}
            ></textarea>
          </div>
        </section>

        {/* Footer */}
        <section className="mailBox__footer">
          <button onClick={this.onSubmit}>Send</button>
          <FontAwesomeIcon
            icon={["fa", "trash"]}
            onClick={this.reset}
            class="mailBin"
          />
        </section>
      </section>
    );
  }
}

export default Mail;
