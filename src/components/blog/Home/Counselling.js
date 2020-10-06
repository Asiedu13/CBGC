import React from "react";
import Booking from "./CounsellingComp/Booking";
import El from "./CounsellingComp/Elaboration";

class Counselling extends React.Component {
  render() {
    return (
      <section className="counselling">
        <El />
        <Booking />
      </section>
    );
  }
}

export default Counselling;
