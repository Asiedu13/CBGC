import React, { Suspense, lazy } from "react";
import Nav from "./components/blog/Nav";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/blog/Home/Home"));
const Article = lazy(() => import("./components/blog/Articles/Articles"));

function App8() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/articles" component={Article} />
          </Switch>
          <Footer />
        </section>
      </Suspense>
    </Router>
  );
}

export default App8;
