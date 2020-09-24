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

  handleIconChange = (stateField) => {
    console.log(stateField);
    let n = 0;
    const iconInterval = setInterval(() => {
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
  };
  //   inconInterval(0);

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus
              recusandae, praesentium, provident animi maxime nam fugiat error
              accusamus adipisci id! Nisi delectus molestiae aspernatur natus
              dolore ducimus omnis dolorem! Autem laboriosam ratione perferendis
              facere similique. Neque nostrum magni sequi ex hic impedit
              pariatur ipsam officia. Omnis est illo aliquam?
            </p>
          </section>
        </section>
      </section>
    );
  }
}