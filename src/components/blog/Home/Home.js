import React, {lazy, Suspense} from "react";
import Header from "./Header";
import Paragraph1 from "./Paragraph1";
import Articles from "./Articles";
// import Shopping from "./Shopping";
import Counselling from "./Counselling";

const Shopping = lazy(() => import("./Shopping"));

class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section>
      
        <Header />
        <Paragraph1 />
        <Articles />
        <Shopping />
        
        <Suspense fallback={<div>Counselling</div>}>

        <Counselling />
        </Suspense>
      </section>
    );
  }
}

export default Home;
