import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Elaboration extends Component {
  constructor() {
    super();
    this.state = {
      feelings: "",
      value: 0,
    };
  }
  componentDidMount() {
    this.setState({
      feelings: ["Depressed", "Anxious", "heart-broken", "nervous", "happy"],
    });
    this.handleIconChange(this.state.feelings);
    console.log(this.state.feelings);
  }
  componentWillUnmount() {
    this.setState({
      feelings: "",
    });
  }

  handleIconChange = (stateField) => {
    console.log(stateField);
    let iconInterval;
    if (stateField) {
      let n = 0;
      iconInterval = setInterval(() => {
        if (n === 4) {
          n = 0;
          console.log(n);
          this.setState({ value: n });
          n++;
        } else {
          n++;
          console.log(n);
          this.setState({ value: n });
        }
      }, 3000);
    } else {
      clearInterval(iconInterval);
    }
  };

  render() {
    let icon;
    let description;
    let color;
    switch (this.state.value) {
      case 0:
        icon = "sad-cry";
        description = "sad";
        color = "red";

        break;

      case 1:
        icon = "sad-tear";
        description = "bad";
        color = "pink";
        break;
      case 2:
        icon = "heart-broken";
        description = "heart-broken";
        color = "blue";
        break;

      case 3:
        icon = "low-vision";
        description = "Anxious";
        color = "gold";
        break;

      case 4:
        icon = "smile";
        description = "happy";
        color = "orange";
        break;

      default:
        icon = "smile";
        description = "happy";
        color = "orange";
        break;
    }

    return (
      <section className="counselling__el">
        <section className="counselling__el__feeling">
          <div className="text">
            <h2 className="text__content">Are you feeling</h2>
          </div>
          <div className="feeling">
            <FontAwesomeIcon icon={icon} size="7x" color={color} />
            <h2 className="feeling__text"> {description} </h2>
          </div>
        </section>
        <section className="counselling__el__paragraph">
          <section className="counselling__el__paragraph__text">
            <p>
              In this current dispensation of so much hustle and bustle everyday
              we much forget to take care of ourselves and give ourselves the
              much deserved attention we need after so much hard words.
              Clarkson's counsel is here to take a few minutes of your day to
              create recognizance of our hard work and our mental health. Don't
              lose yourself to the world. Self love is priority. <br />
              Thank you.
            </p>
          </section>
        </section>
      </section>
    );
  }
}
