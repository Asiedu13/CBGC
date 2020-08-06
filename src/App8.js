import React, { Suspense, lazy } from "react";
import Nav from "./components/blog/Nav";
import Footer from "./components/blog/Footer";
import "./css/blog/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("./components/blog/HomePage"));
const Article = lazy(() => import("./components/blog/ArticlesPage"));
const Register = lazy(() => import("./components/blog/RegisterPage"));

function App8() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/articles" component={Article} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer />
        </section>
      </Suspense>
    </Router>
  );
}

export default App8;
