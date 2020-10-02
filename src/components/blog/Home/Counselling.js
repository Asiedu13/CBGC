import React from "react";
import Booking from "./CounsellingComp/Booking";
import El from "./CounsellingComp/Elaboration";
import Calendar from "react-calendar";
class Counselling extends React.Component {
  render() {
    return (
      <section className="counselling">
        <El />
        <Booking />
        <Calendar
          onClickDay={(val, e) => {
            console.log(e);
          }}
          className="counselling-calendar"
        />
      </section>
    );
  }
}

export default Counselling;
