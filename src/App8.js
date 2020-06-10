import React from "react";
import Nav from "./components/blog/Nav";
import Home from "./components/blog/Home/Home";
import Article from "./components/blog/Articles/Articles";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App8() {
  return (
    <Router>
      <section>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles" component={Article} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App8;
