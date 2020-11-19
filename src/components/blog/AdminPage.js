import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
export default class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      btnHover0: false,
      btnHover1: false,
    };
  }
  handleMouseOver = (event) => {
    let { name } = event.target;
    if (name === "articles") {
      this.setState({ btnHover0: true });
    } else if (name === "shop") {
      this.setState({
        btnHover1: true,
      });
    }
  };

  handleMouseOut = (event) => {
    let { name } = event.target;

    if (name === "articles") {
      this.setState({
        btnHover0: false,
      });
    } else if (name === "shop") {
      this.setState({
        btnHover1: false,
      });
    }
  };
  render() {
    return (
      <div className="adminPage">
        <header>
          <Slide left>
            <h2>
              <b>Say Gob3,</b> Admin
            </h2>
          </Slide>
        </header>

        <section className="adminPage__subHeaders">
          <header>
            <Zoom>
              <h3>What do you want to do today?</h3>
            </Zoom>
          </header>
          <section className="adminPage__subHeaders__items">
            <div className="adminPage__subHeaders__items__btnCon">
              <button
                name="articles"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                Articles
              </button>
              {this.state.btnHover0 ? (
                <Fade>
                  <section className="adminPage__subHeaders__items__btnCon__desc">
                    <ul>
                      <li>Number of Articles:-- </li>
                      <li>Edited: -- </li>
                      <li>Hidden: -- </li>
                      <li>Deleted: -- </li>
                    </ul>
                  </section>
                </Fade>
              ) : (
                ""
              )}
            </div>
            <div className="adminPage__subHeaders__items__btnCon">
              <button
                name="shop"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                Shop
              </button>
              {this.state.btnHover1 ? (
                <Fade>
                  <section className="adminPage__subHeaders__items__btnCon__desc">
                    <ul>
                      <li>Number of Items: -- </li>
                      <li>Edited: -- </li>
                      <li>Hidden: -- </li>
                      <li>Deleted: -- </li>
                    </ul>
                  </section>
                </Fade>
              ) : (
                ""
              )}
            </div>
          </section>
        </section>
      </div>
    );
  }
}
