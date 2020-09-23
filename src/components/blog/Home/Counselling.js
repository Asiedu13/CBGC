import React from "react";
import Header from "./CounsellingComp/Header";
import Booking from "./CounsellingComp/Booking";
import El from "./CounsellingComp/Elaboration";

class Counselling extends React.Component {
  render() {
    return (
      <section className="counselling">
        <Header />
        <El/>
        <Booking />
      </section>
    );
  } 
}

export default Counselling;
