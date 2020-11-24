import React, { Component } from "react";
import {fetcher} from './Util/HTTP'
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Items from "./Articles/ArticleComp/Items";
export default class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      btnHover0: false,
      btnHover1: false,
      btnClickState: "",
    };
  }
  componentDidMount() {
    let fetched = fetcher("http://localhost:5000/api/articles/short?limit=340", "", "GET");
      fetched.then(data => {
        this.setState({
          btnClickState: data,
        })
      })

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

  handleOptionBtnClick = (event) => {
    let { name } = event.target;
    if (name === "articles") {
      
    } else if (name === "shop") {
      // do something
    }
  };
  render() {
    let optionItems = this.state.btnClickState ? this.state.btnClickState.map(item => {
      return (
        <Items key={item.title} article={item} />
          
      )
    }): "";
    return (
      <div className="adminPage">
        <header className="adminPage__header">
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
                onClick={this.handleOptionBtnClick}
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
                onClick={this.handleOptionBtnClick}
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

        <section className="buttonDisplay">
          <header>
            <h2>Articles</h2>
            <input type="search" name="searchBar" id="searcher" />
          </header>
          <section className="buttonDisplay__items">
                {this.state.btnClickState ? optionItems : 'Null' }
          </section>
        </section>
      </div>
    );
  }
}
