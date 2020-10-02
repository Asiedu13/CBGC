import React from "react";
import Header from "./Home/Header";
import Paragraph1 from "./Home/Paragraph1";
import Articles from "./Home/Articles";
import Shopping from "./Home/Shopping";
import Counselling from "./Home/Counselling";


class HomePage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section>
        <Header />
        <Articles />
        <Paragraph1 />
        <Shopping />
        <Counselling />
       
      </section>
    );
  }
}

export default HomePage;
