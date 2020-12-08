import React from "react";
import Button from "../../Util/Button";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      year: "",
      month: "",
      day: "",
      dValue: "",
    };
  }
  render() {
    let date = this.state.day
      ? `${this.state.day[0]} ${this.state.day[1]} ${this.state.day[2]} ${this.state.day[3]}`
      : "Select date from calendar";
    return (
      <section className="counselling__booking">
        <section className="counselling__booking__part1">
          <h2>Book an appointment today</h2>

          <div className="counselling__booking__part1__date">
            <p> {date} </p>
          </div>

          <div className="buttons">
            <Link to="/">
              <Button label="schedule" importance="high" />
            </Link>
            <Link to="/">
              <Button label="See more" />
            </Link>
          </div>
        </section>

        <div className="counselling__booking__part2">
          <Calendar
            className="counselling-calendar"
            onChange={(value, event) => {
              this.setState({ day: value.toString().split(" ") });
            }}
          />
        </div>
      </section>
    );
  }
}
export default Body;
