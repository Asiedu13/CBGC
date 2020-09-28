import React from "react";
import Button from "../../Util/Button";
import { Link } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <section className="counselling__booking">
        <div className="counselling__booking__part1">
          <h2>Book an appointment today</h2>
          <div className="buttons">
            <Link to="/">
            <Button label="schedule" importance="high" />
            </Link>

            <Link to="/">
             <Button label="See more" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
export default Body;
