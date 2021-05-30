import React, { lazy, Suspense } from "react";
import Header from "./Header";
import Paragraph1 from "./Paragraph1";
import Articles from "./Articles";
import Counselling from "./Counselling";
const Shopping = lazy(() => import("./Shopping"));

const Home = () => (
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

export default Home;
