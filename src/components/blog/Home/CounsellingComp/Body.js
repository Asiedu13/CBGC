import React from "react";
import Button from "../../Util/Button";
import { Link } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <section className="counselling__body">
        <div className="counselling__body__intro">
          <h2>Meet a counsellor</h2>
          <h1>Now</h1>
          <h3>schedule a meeting today</h3>
          <Link to="/calendar">
            <Button label="Schedule" importance="medium" />
          </Link>
        </div>
      </section>
    );
  }
}
export default Body;
